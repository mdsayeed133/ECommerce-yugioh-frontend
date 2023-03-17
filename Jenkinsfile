pipeline {
    agent any

    tools {
        nodejs 'Node_14'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
          steps {
            dir('ecom-yugioh') {
              sh 'npm ci'
              sh 'npm run build'
            }
          }
        }


        stage('Test') {
            steps {
                withEnv(["PATH+NODE=${tool 'Node_14'}/bin"]) {
                    dir('ecom-yugioh') {
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    dockerImage = docker.build('ecommerce-yugioh-frontend', 'ecom-yugioh/')
                }
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([string(credentialsId: 'dockerLogin', variable: 'DOCKER_HUB_PASSWORD')]) {
                    script {
                        docker.withRegistry('https://index.docker.io/v1/', 'dockerLogin') {
                            dockerImage.push("latest")
                        }
                    }
                }
            }
        }
    }
}
