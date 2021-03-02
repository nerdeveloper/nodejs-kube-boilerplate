pipeline {
    agent any
    environment {
        KUBECONFIG = credentials('kubeconfig')
        DOCKER_USERNAME = credentials('docker_username')
        DOCKER_PASS = credentials('docker_pass')
    }
    stages {
        stage('Build and Push docker image') {
            steps {
                sh "docker build -t nerdeveloper/nodejs-demo --rm ."
                sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASS"
                sh "docker push nerdeveloper/nodejs-demo"
            }
        }
        stage('Deploy App to Kubernetes Cluster') {
            steps {
                sh "kubectl --kubeconfig $KUBECONFIG apply -f k8s/app"
            }
        }
        stage('Deploy Nginx to Kubernetes Cluster') {
            steps {
                sh "kubectl --kubeconfig $KUBECONFIG apply -f k8s/nginx"
            }
        }
    }
}
