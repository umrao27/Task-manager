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
      stage('Install') {
            steps {
                sh 'node -v'
                sh 'npm install'
            }
        }
      steps {
        dir('backend') {
          sh 'npm install'
        }
      }
    }

    stage('Run Tests') {
      steps {
        dir('backend') {
          // Optional: run Jest or Mocha tests
          // sh 'npm test'
        }
      }
    }

    stage('Deploy Backend') {
      steps {
        echo "Deploying backend..."
        // Example: restart server with pm2 or rsync files
        // sh 'pm2 restart all'
      }
    }
  }
}
