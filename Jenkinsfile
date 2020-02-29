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
        sshagent (credentials: ['ssh']) {
          sh '''export PATH=./node_modules/.bin:${PATH};
                ng build --prod;
                echo "Fertig"'''
          sh '''ssh ellermeier.net@ssh.stackcp.com ls -al;
                echo "Fertig ssh";'''
        }
      }
    }

  }
  environment {
    HOME = '.'
  }
}
