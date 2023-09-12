pipeline {
    agent any

    environment {
      
        SSH_KEY_PATH = '/path/to/your/ssh/key.pem'
        SSH_USER = 'ec2-user'
        APP_DIR = '/path/to/your/app/directory'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Deploy to EC2') {
            steps {
              
                sh ""
                sh "ssh -i ${env.SSH_KEY_PATH} ${env.SSH_USER}@${env.EC2_INSTANCE_ID} 'cd ${env.APP_DIR} && git pull && npm install && pm2 restart your-app-name'"
            }
        }
    }
}
