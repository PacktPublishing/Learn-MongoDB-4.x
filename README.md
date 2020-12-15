## $5 Tech Unlocked 2021!
[Buy and download this product for only $5 on PacktPub.com](https://www.packtpub.com/)
-----
*The $5 campaign         runs from __December 15th 2020__ to __January 13th 2021.__*

# 	Learn MongoDB 4.x

<a href="https://www.packtpub.com/product/learn-mongodb-4-x/9781789619386?utm_source=github&utm_medium=repository&utm_campaign=9781789619386"><img src="https://static.packt-cdn.com/products/9781789619386/cover/smaller" alt="Learn MongoDB 4.x" height="256px" align="right"></a>

This is the code repository for [Learn MongoDB 4.x](https://www.packtpub.com/product/learn-mongodb-4-x/9781789619386?utm_source=github&utm_medium=repository&utm_campaign=9781789619386), published by Packt.

**A guide to understanding MongoDB development and administration for NoSQL developers**

## What is this book about?
When it comes to managing a high volume of unstructured and non-relational datasets, MongoDB is the defacto database management system (DBMS) for DBAs and data architects. This updated book includes the latest release and covers every feature in MongoDB 4.x, while helping you get hands-on with building a MongoDB database app.

This book covers the following exciting features: 
* Understand how to configure and install MongoDB 4.x
* Build a database-driven website using MongoDB as the backend
* Perform basic database operations and handle complex MongoDB queries
* Develop a successful MongoDB database design for large corporate customers with complex requirements
* Secure MongoDB database systems by establishing role-based access control with X.509 transport-level security

If you feel this book is for you, get your [copy](https://www.amazon.com/dp/1789619386) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" alt="https://www.packtpub.com/" border="5" /></a>

## Instructions and Navigations
All of the code is organized into folders. For example, Chapter02.

The code will look like the following:
```
if (test expression)
{
  Statement upon condition is true
}
```
Here are the instructions for the test environment that serves for chapters 3 to 12. There are separate instructions, in the book, for testing MongoDB installation (chapter 2). Also, see chapter 13 for instructions on setting up a test environment to model a replica set. See chapter 14 for instructions on setting up a test environment to model a sharded cluster.

### Set up your host computer
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


### How To Setup Test Environment
#### Using Docker Compose
* Install `docker-compose`
* Open a terminal window (or Windows GIT bash prompt)
* Change to `/path/to/repo`
* Bring the test environment online:
```
cd /path/to/repo
docker-compose up -d --build
```

#### Using Docker
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

### Restore the Sample Data
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

### Access the Test Server from Outside Docker
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

**Following is what you need for this book:**
This book is a MongoDB tutorial for DevOps engineers, database developers, database administrators, system administrators and those who are just getting started with NoSQL and looking to build document-oriented databases and gain real-world experience in managing databases using MongoDB. Basic knowledge of databases and Python is required to get started with this DBMS book.

With the following software and hardware list you can run all code files present in the book (Chapter 1-16).

### Software and Hardware List

| Chapter  | Software required                                                                                                       | OS required    |
| -------- | ------------------------------------------------------------------------------------------------------------------------| ---------------|
| 1-16     | Docker, Docker Compose, Git (optional) with 2 GB free disk space, 4 GB of RAM and 500 Kbps or faster internet connection| Linux or macOS |
| 1-16     | Docker for Windows and Git for Windows with 2 GB free disk space, 4 GB of RAM and 500 Kbps or faster internet connection| Windows        |



We also provide a PDF file that has color images of the screenshots/diagrams used in this book. [Click here to download it](http://www.packtpub.com/sites/default/files/downloads/9781789619386_ColorImages.pdf).

### Related products <Other books you may enjoy>
* MongoDB 4 Quick Start Guide [[Packt]](https://www.packtpub.com/product/mongodb-4-quick-start-guide/9781789343533?utm_source=github&utm_medium=repository&utm_campaign=9781789343533) [[Amazon]](https://www.amazon.com/dp/1789343534)

* Mastering MongoDB 4.x - Second Edition [[Packt]](https://www.packtpub.com/product/mastering-mongodb-4-x-second-edition/9781789617870?utm_source=github&utm_medium=repository&utm_campaign=9781789617870) [[Amazon]](https://www.amazon.com/dp/1789617871)

## Get to Know the Author
**Doug Bierer** has been writing code since the early 1970s. His first project was a terrain simulator that ran on a Digital Equipment Corporation PDP-8 with 4 K of RAM. Since then, he's written applications for a variety of customers worldwide, in various programming languages, including BASIC, Assembler, PL/I, C, C++, FORTH, Prolog, Pascal, Java, PERL, PHP, and Python. His work with database technology spans a similar range in terms of years and includes Ingres, d:Base, Clipper, FoxBase, r:Base, ObjectVision, Btrieve, Oracle, MySQL, and, of course, MongoDB. Doug runs his own company, unlikelysource, and is also CTO at Foreach Code Factory, being involved in both training (php-cl) and a new cloud services platform (Linux for PHP Cloud Services).

### Suggestions and Feedback
[Click here](https://docs.google.com/forms/d/e/1FAIpQLSdy7dATC6QmEL81FIUuymZ0Wy9vH1jHkvpY57OiMeKGqib_Ow/viewform) if you have any feedback or suggestions.





