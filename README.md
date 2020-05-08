# CI/CD pipeline minimal demo
Repository for a demo of a CI/CD pipeline using Docker and Github actions.

## Run

**Server**:
1. Get Docker
2. `docker pull johankjip/ci-cd-demo`
3. `docker run -d -p 80:5000 --name ci-cd-demo johankjip/ci-cd-demo`

To setup the workflow the following secret variables have to be added:
- **DOCKER_USERNAME**, username of your docker account.
- **DOCKER_PASSWORD**, password of your docker account. 
- **DO_USERNAME**, user of the account we are SSH to on the server.
- **SERVER_IP**, IP of the server.
- **SSH_KEY**, ssh key to server.

Inside devops.yml you have to edit the docker hub pull and push location to your own repository.

**Group members**:
- Davidjo2
- Johvh
