pipeline {
  agent {
    docker {
      image 'node:alpine'
    }

  }
  stages {
    stage('Prepare') {
      steps {
        sh '''sudo apt-get update;
sudo apt-get install chromium-browser -y
npm install;
'''
      }
    }

    stage('UnitTest') {
      steps {
        sh 'npm run test-headless'
      }
    }

    stage('E2E Test') {
      steps {
        sh 'echo \'TODO E2E Test\';'
      }
    }

    stage('Build') {
      steps {
        sh '''export PATH=./node_modules/.bin:${PATH};
ng build'''
      }
    }

  }
  environment {
    HOME = '.'
  }
}