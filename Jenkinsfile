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
        sh '''# npm run test-headless
echo "paused"'''
      }
    }

    stage('E2E Test') {
      steps {
        sh 'npm list | grep jasmine'
        sh '''# npm run e2e
echo "paused"'''
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