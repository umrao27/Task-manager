pipeline {
  agent any

  tools {
    nodejs "Node 24"
  }

  environment {
    NODE_ENV = "production"
  }

  stages {
    stage('Clone Backend Repo') {
      steps {
        git branch: 'main', url: 'https://github.com/umrao27/Task-manager.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        dir('server') {
          sh 'node -v'
          sh 'npm install'
        }
      }
    }

    stage('Run Tests') {
      steps {
        dir('server') {
          // Uncomment if you have tests
          // sh 'npm test'
        }
      }
    }

    stage('Deploy') {
      steps {
        echo "Deploying backend..."
        // Example: restart server with pm2 or rsync files
        // dir('server') {
        //   sh 'pm2 restart all'
        // }
      }
    }
  }
}