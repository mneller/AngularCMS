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
        sh 'npm list | grep jasmine'
        sh 'npm run e2e'
      }
    }

    stage('Build') {
      steps {
        sh 'export PATH=./node_modules/.bin:${PATH}'
        sh 'ng build -prod'

        sshagent (credentials: ['martinSSH']) {
          sh 'ssh-keyscan -H ssh.stackcp.com >> ~/.ssh/known_hosts'
          sh 'ssh ellermeier.net@ssh.stackcp.com ls -al'
          sh 'echo "hugo"'
        }
      }
    }

  }
  environment {
    HOME = '.'
  }
}
