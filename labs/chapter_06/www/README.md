# How to Configure Apache to Run Python on Linux

* See: https://www.digitalocean.com/community/tutorials/how-to-set-up-an-apache-mysql-and-python-lamp-server-without-frameworks-on-ubuntu-14-04

## Configure Apache to run CGI
```
sudo a2dismod mpm_event
sudo a2enmod mpm_prefork cgi
```
## Set up virtual host for `learning.mongodb.local`
* Add an fake host entry into `/etc/hosts`
```
sudo echo "127.0.2.14      learning.mongodb.local">>/etc/hosts
```
* Modify the vhost file `learning.mongodb.local.conf` to match your directory structure
  * Replace all occurances of `/path/to/files/learn-mongodb` with the actual path to the repository you restored
* After modifying, copy the vhost file as shown:
```
cp learning.mongodb.local.conf /etc/apache2/sites-available/learning.mongodb.local.conf
```
* Enable the new virtual host:
```
sudo a2ensite learning.mongodb.local.conf 
```
* Restart Apache
```
sudo service apache2 restart
```
## Configure Python files
* Add this line to the beginning of any Python file which will be web executable:
```
#!/usr/bin/python
print("Content-Type: text/html")
print()
```
* Make all Python files in the web server document root executable:
```
sudo chmod 755 *
```

# How to Configure Apache to Run Python in the Windows Environment

# How to Configure Apache to Run Python on a Mac


