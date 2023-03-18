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
                    dockerImage = docker.build('mdsayeed133/ecommerce-yugioh-frontend', 'ecom-yugioh/')
                }
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerLogin', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    script {
                        docker.withRegistry('https://index.docker.io/v1/', 'dockerLogin') {
                            sh "echo '${DOCKER_PASSWORD}' | docker login -u ${DOCKER_USERNAME} --password-stdin"
                            dockerImage.push("latest")
                        }
                    }
                }
            }
        }
    }
}


