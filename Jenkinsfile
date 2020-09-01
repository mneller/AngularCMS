pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
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
        sh '''# npm run test-headless
echo "paused"'''
      }
    }

    stage('E2E Test') {
      steps {
        sh 'npm run e2e'
      }
    }

    stage('Build') {
      environment {
        SSH_PARA = '-o StrictHostKeyChecking=no'
      }
      steps {
        sh 'export PATH=./node_modules/.bin:${PATH}'
        sh 'ng build --prod --aot'
        sshagent(credentials: ['martinSSH']) {
          sh 'ls -al dist'
          sh 'ssh ${SSH_PARA} ${SSH_USER}@${SSH_HOST} rm *.js'
          sh 'scp ${SSH_PARA} dist/AngularCMS/*.* ${SSH_USER}@${SSH_HOST}:.'
          sh 'echo "Finish ssh"'
        }

      }
    }

  }
  environment {
    HOME = '.'
  }
}