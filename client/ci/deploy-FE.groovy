pipeline {
  agent any

  tools {
    nodejs "Node 24" 
  }

  environment {
    NODE_ENV = "production"
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
          sh 'npm install'
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