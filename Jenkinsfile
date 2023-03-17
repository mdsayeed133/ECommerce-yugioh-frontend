pipeline {
    agent any

    tools {
        nodejs 'Node 14'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    dockerImage = docker.build('ecommerce-yugioh-frontend', '.')
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
