pipeline {
  agent {
    docker {
      image 'node:12.14.1'
      args '''# base image
# FROM node:12.14.1

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c \'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list\'
RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH=/app/node_modules/.bin:$PATH
ENV privileged=true;

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install'''
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