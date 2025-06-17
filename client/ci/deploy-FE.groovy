pipeline {
  agent any

  tools {
    nodejs "Node 24.2.0"
  }

  environment {
    NODE_ENV = "production";
    SONARQUBE_ENV= credentials('sonar-token');
  }

  stages {
    stage('Clone Frontend Repo') {
      steps {
        git branch: 'main', url: 'https://github.com/umrao27/Task-manager.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        dir('client') {
           sh 'npm ci'
        }
      }
    }

    stage('SonarQube Analysis') {
      steps {
        withSonarQubeEnv('SonarQube') {
           sh "sonar-scanner -Dsonar.login=${SONARQUBE_ENV}"
        }
      }
    }

    stage('Build') {
      steps {
        dir('client') {
          sh 'npm run build'
        }
      }
    }

    stage('Deploy') {
      steps {
        echo "Deploying frontend..."
        // Example: scp dist/ to static web server
        // sh 'scp -r dist/* user@server:/var/www/frontend'
      }
    }
  }
}