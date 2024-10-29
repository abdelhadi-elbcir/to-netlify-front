pipeline {
    agent any
    tools {
        nodejs 'nodejs 20.23.0'
    }
    environment {
        BUILD_DIR = '/app/build/tripyFront'
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

        stage('Deploy Build Artifacts') {
            steps {
                sh """
                    rm -rf ${BUILD_DIR}/*   # Clear the existing build directory
                    cp -R build/* ${BUILD_DIR}/  # Copy the new build files
                """
            }
        }
    }
    post {
        success {
            echo 'React app built and deployed successfully!'
        }
        failure {
            echo 'Build or deployment failed.'
        }
    }
}
