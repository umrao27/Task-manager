pipeline {
  agent any

  tools {
    nodejs "Node 24"  // Use your configured Node version in Jenkins
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
        dir('frontend') {
          sh 'npm install'
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir('frontend') {
          sh 'npm run build'
        }
      }
    }

    stage('Deploy Frontend') {
      steps {
        echo "Deploying frontend..."
        // Example: scp dist/ to static web server
        // sh 'scp -r dist/* user@server:/var/www/frontend'
      }
    }
  }
}
