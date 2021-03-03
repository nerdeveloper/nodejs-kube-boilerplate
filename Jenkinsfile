pipeline {
    agent any
    environment {
        KUBECONFIG = credentials('kubeconfig')
        DOCKER_USERNAME = credentials('docker_username')
        DOCKER_PASS = credentials('docker_pass')
        IMAGE_NAME = 'nodejs-demo'
    }
    stages {
        stage('Build and Push docker image') {
            steps {
                sh "docker build -t nerdeveloper/$IMAGE_NAME:$BUILD_NUMBER --rm ."
                sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASS"
                sh "docker push nerdeveloper/$IMAGE_NAME:$BUILD_NUMBER"
            }
        }
        stage('Deploy App to Kubernetes Cluster') {
            steps {
                sh "kubectl --kubeconfig $KUBECONFIG apply -f k8s/app"
                sh "kubectl --kubeconfig $KUBECONFIG set image deployment $IMAGE_NAME $IMAGE_NAME=nerdeveloper/$IMAGE_NAME:$BUILD_NUMBER"
            }
        }
        stage('Deploy Nginx to Kubernetes Cluster') {
            steps {
                sh "kubectl --kubeconfig $KUBECONFIG apply -f k8s/nginx"
            }
        }
    }
}
