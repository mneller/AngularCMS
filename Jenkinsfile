pipeline {
  agent {
    docker {
      image 'node:12.14.1'
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
        sh '''export PATH=./node_modules/.bin:${PATH}
ng test --single-run'''
      }
    }

    stage('E2E Test') {
      steps {
        sh '''export PATH=./node_modules/.bin:${PATH}
ng e2e --webdriver-update'''
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