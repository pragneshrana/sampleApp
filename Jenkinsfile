pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/pragneshrana/sampleApp.git'
            }
        }
        stage('Build Backend Docker Image') {
            steps {
                sh 'docker build -t sampleapp ./backend'
            }
        }
        stage('Run Backend Container') {
            steps {
                sh 'docker run -d -p 5000:5000 sampleapp'
            }
        }
        stage('Build Frontend Docker Image') {
            steps {
                sh 'docker build -t sampleapp-front ./frontend'
            }
        }
        stage('Run Frontend Container') {
            steps {
                sh 'docker run -d -p 5173:5173 sampleapp-front'
            }
        }
    }
}
