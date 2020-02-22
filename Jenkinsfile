pipeline {
  agent {
    dockerfile {
      filename './Dockerfile'
    }

  }
  stages {
    stage('Prepare') {
      steps {
        sh 'npm install'
      }
    }

    stage('UnitTest') {
      steps {
        sh 'ng test;'
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