#!/bin/bash

# update packages and install dependencies
sudo yum update -y
sudo yum install -y docker git

# start and enable the docker service
sudo service docker start
sudo chkconfig docker on

# pull the Jenkins image from Docker Hub
sudo docker pull jenkins/jenkins

# run the Jenkins container
sudo docker run -p 8080:8080 -p 50000:50000 -v /var/jenkins_home jenkins/jenkins


This script does the following:

Updates the packages and installs dependencies (Docker and Git)
Starts and enables the Docker service
Pulls the official Jenkins image from Docker Hub
Runs the Jenkins container, mapping port 8080 and 50000 on the host to the container and mounting the /var/jenkins_home directory as a volume.
To run the script, save it to a file with a .sh extension, for example jenkins-install.sh. Make the script executable by running chmod +x jenkins-install.sh and then
 run the script with ./jenkins-install.sh.

Once the Jenkins container is running, you can access the Jenkins web interface by visiting http://<EC2-Instance-IP>:8080 in your web browser.

Please note that this script is intended to be used as an example and may need to be adapted to your specific environment and use case.

Also, Keep in mind that the default Jenkins credentials are: username: admin and the password is located in the file /var/jenkins_home/secrets/initialAdminPassword,
 you can use the command sudo docker exec -it <container id> cat /var/jenkins_home/secrets/initialAdminPassword to get the initial admin password.
