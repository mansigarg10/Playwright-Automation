
pipeline {
    agent any

    options {
        timestamps()
        skipDefaultCheckout(true)
        buildDiscarder(logRotator(numToKeepStr: '20'))
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'node --version'
                bat 'npm --version'
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            script {
                if (fileExists('test-results/junit.xml')) {
                    junit(
                        testResults: 'test-results/junit.xml',
                        allowEmptyResults: false
                    )
                } else {
                    echo 'JUnit report was not generated.'
                }

                if (fileExists('playwright-report/index.html')) {
                    publishHTML(target: [
                        reportName: 'Playwright HTML Report',
                        reportDir: 'playwright-report',
                        reportFiles: 'index.html',
                        keepAll: true,
                        alwaysLinkToLastBuild: true,
                        allowMissing: true
                    ])
                } else {
                    echo 'Playwright HTML report was not generated.'
                }

                archiveArtifacts(
                    artifacts: 'test-results/**, playwright-report/**',
                    allowEmptyArchive: true
                )
            }
        }

        success {
            emailext(
                to: 'mansigarg1001@gmail.com',
                subject: "PASS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """Build status: SUCCESS
Job: ${env.JOB_NAME}
Build: ${env.BUILD_URL}

Open the build URL to view the published test reports."""
            )
        }

        unsuccessful {
            emailext(
                to: 'mansigarg1001@gmail.com',
                subject: "BUILD FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """Build status: ${currentBuild.currentResult}
Job: ${env.JOB_NAME}
Build: ${env.BUILD_URL}

Hey Mansi, This is to inform you that the build has failed. Please open the build URL to view the console output and available test reports."""
            )
        }
    }
}
