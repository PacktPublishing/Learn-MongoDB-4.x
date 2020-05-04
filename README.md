# Test Environment for Learn MongoDB 4.x

Here are the instructions for the test environment that serves for chapters 3 to 12. There are separate instructions, in the book, for testing MongoDB installation (chapter 2). Also, see chapter 13 for instructions on setting up a test environment to model a replica set. See chapter 14 for instructions on setting up a test environment to model a sharded cluster.

## Set up your host computer
* Install `git`
  * On Linux or Mac: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
  * On Windows: https://gitforwindows.org/
* Clone the repository for the book
  * Open a terminal window (command prompt)
  * If you are running Windows, be sure to use the Git BASH shell to follow these commands
  * Change to a directory under which you wish to install the files for the book
  * Clone the repository for the book using `git` (substitute the target directory on your computer in place of `/path/to/repo`):
```
git clone https://github.com/packtpub/learn-mongodb-4_0 /path/to/repo
```
* Install `docker`
* Pull the Docker base image for the book
```
docker pull unlikelysource/mongodb_python:latest
```


## How To Setup Test Environment
### Using Docker Compose
* Install `docker-compose`
* Open a terminal window (or Windows GIT bash prompt)
* Change to `/path/to/repo`
* Bring the test environment online:
```
cd /path/to/repo
docker-compose up -d --build
```

### Using Docker
* Install `docker`
* Create a volume `learn-mongodb`
```
docker volume create db_data_server_1
```
* Identify the location
```
docker volume ls
docker volume inspect db_data_server_1
```
* Run PHP for Linux image and mount the volume (replace $PWD with /path/to/repo):
```
docker run -d -it --name learn-mongo-server-1 -v db_data_server_1:/data/db -v $PWD:/repo -v $PWD/docker/hosts:/etc/hosts -v $PWD/docker/mongod.conf:/etc/mongod.conf unlikelysource/mongodb_python:latest
```

## Restore the Sample Data
* Open a terminal window (or Windows GIT bash prompt)
* Change to `/path/to/repo`
* Get container ID
```
docker container ls -a
```
* Open a shell to the container
```
docker exec -it <container_ID> /bin/bash
// or
docker exec -it learn-mongo-server-1 /bin/bash
```
* Restore sample data
```
/repo/restore_data_inside.sh
```
* Stop / start the web server
```
/repo/restart_apache_inside.sh
```

## Access the Test Server from Outside Docker
* From inside the docker container, run this command to determine the IP address:
```
ifconfig
```
* Add an entry at the end of the `/etc/hosts` file of your own computer as follows:
  * Substitute the IP address you discovered above if it's different from `172.16.0.11`
```
172.16.0.11    learning.mongodb.local
```
* Also, append the entries from `/path/to/repo/docker/hosts` file onto the end of your own `/etc/hosts` file
* For readers using a Windows computer, the `/etc/hosts` file is located here:
```
C:\Windows\System32\drivers\etc\hosts
```
