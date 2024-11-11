pipeline {
    agent any
    tools {
        nodejs 'nodejs 20.23.0'
    }
    environment {
        LOCAL_BUILD_DIR = 'build'
        REMOTE_HOST = 'ubuntu@54.82.8.13'
        REMOTE_BUILD_DIR = '/app/build/tripyFront'
        SSH_OPTIONS = "-o StrictHostKeyChecking=no -o ConnectTimeout=30"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy Build Artifacts to EC2') {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'ec2-key', keyFileVariable: 'KEY_FILE')]) {
                    script {
                        // Create the target directory on the remote server and transfer files using rsync
                        def rsyncResult = sh(script: """
                            ssh -i \$KEY_FILE ${SSH_OPTIONS} ${REMOTE_HOST} 'mkdir -p ${REMOTE_BUILD_DIR}'
                            rsync -avz -e "ssh -i \$KEY_FILE ${SSH_OPTIONS}" ${LOCAL_BUILD_DIR}/ ${REMOTE_HOST}:${REMOTE_BUILD_DIR}
                        """, returnStatus: true)

                        if (rsyncResult != 0) {
                            error "Failed to deploy build artifacts to remote server."
                        }
                    }
                }
            }
        }
    }
    post {
        success {
            echo 'React app built and deployed to EC2 successfully!'
        }
        failure {
            echo 'Build or deployment failed.'
        }
    }
}
