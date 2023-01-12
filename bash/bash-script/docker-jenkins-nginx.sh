#!/bin/bash

# update packages and install dependencies
sudo yum update -y
sudo yum install -y docker git nginx

# start and enable the docker service
sudo service docker start
sudo chkconfig docker on

# pull the Jenkins image from Docker Hub
sudo docker pull jenkins/jenkins

# run the Jenkins container
sudo docker run -p 8080:8080 -p 50000:50000 -v /var/jenkins_home jenkins/jenkins

# create a new nginx configuration file for Jenkins
sudo echo "server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    }
}" > /etc/nginx/conf.d/jenkins.conf

# test the nginx configuration
sudo nginx -t

# restart nginx to apply the new configuration
sudo service nginx restart


This script does the following:

Updates the packages and installs dependencies (Docker, Git and nginx)
Starts and enables the Docker service
Pulls the official Jenkins image from Docker Hub
Runs the Jenkins container, mapping port 8080 and 50000 on the host to the container and mounting the /var/jenkins_home directory as a volume.
Creates a new nginx configuration file for Jenkins and set it to listen on port 80 and proxy requests to the Jenkins container running on port 8080.
Test the configuration using nginx -t command
Restarts nginx service to apply the new configuration
Once the Jenkins container is running and nginx is configured, you can access the Jenkins web interface by visiting http://<EC2-Instance-IP> in your web browser.

Please note that this script is intended to be used as an example and may need to be adapted to your specific environment and use case. Also, make sure that your
 security group allow incoming traffic on port 80.
Also, Keep in mind that the default Jenkins credentials are: username: admin and the password is located in the file /var/jenkins_home/secrets/initialAdminPassword,
 you can use the command sudo docker exec -it <container id> cat /var/jenkins_home/secrets/initialAdminPassword to get the initial admin password.





