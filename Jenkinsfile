@Library('jenkins-shared-library@release') _
pipeline {
    agent {
        kubernetes(agents()
                    .nodejs().profile('xlarge')
                    .startContainers())
    }
    stages {
        stage("Build and test frontend") {
            steps {
                container('nodejs') {
                    sh 'npm jenkins'
                }
            }
        }
    }
}
