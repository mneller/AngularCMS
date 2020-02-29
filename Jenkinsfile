pipeline {
  agent {
    dockerfile {
      filename './Dockerfile'
    }

  }
  stages {
    stage('Prepare') {
      steps {
        sh '''npm install;
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
        sh '''npm list | grep jasmine;
npm run e2e'''
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