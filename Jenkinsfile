pipeline {
  agent none
  environment {
    SERVICE = ''
  }
  stages {
    stage('Build & Test'){
      agent {
        dockerfile {
          filename 'Dockerfile.jenkins'
        }
      }
      stages {
        stage('Building...') {
          environment {
            AWS_REGION = 'eu-west-1'
            NO_REITH_PROXY = 'true'
            no_proxy = 'localhost,127.0.0.1'
            CLOUD_ID = 'jenkins'
            BASE_DIR = "${env.WORKSPACE}/"
          }
          steps {
            // Getting the service name from package.json
            script {
              SERVICE = sh (
                script: 'jq -r ".name" package.json',
                returnStdout: true
              ).trim()
            }
            echo "Got ${SERVICE} from package.json"
            sh './scripts/build.sh'
          }
        }
        stage('Testing...') {
          steps {
            sh './scripts/test.sh'
          }
        }
      }
    }
    stage('Deploying...') {
      agent any
      environment {
        BASE_DIR = "${env.WORKSPACE}/"
      }
      when {
        branch 'master'
      }
      steps {
        echo "Deploying ${SERVICE}"
        sh ("cosmos-release lambda --lambda-version=`date +%s` ${BASE_DIR}package.zip ${SERVICE}")
      }
      post {
        success {
          echo "${SERVICE} was deployed successfully 😃"
        }
        failure {
          echo "${SERVICE} deployment failed 😒"
        }
      }
    }
  }
}