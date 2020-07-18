#!/bin/bash
echo "Generating SSL certificates ..."
export RAND_DIGITS=`date |cut -c 18-20`
export EMAIL_ADDR="doug@unlikelysource.com"
mkdir /etc/.certs
cd /etc/.certs
echo $RAND_DIGITS >file.srl
touch /root/.rnd
openssl req -out ca.pem -new -x509 -days 3650 -subj "/C=TH/ST=Surin/O=BigLittle/CN=root/emailAddress=$EMAIL_ADDR" -passout pass:password
openssl genrsa -out server.key 2048
openssl req -key server.key -new -out server.req -subj  "/C=TH/ST=Surin/O=BigLittle/CN=$HOSTNAME/emailAddress=$EMAIL_ADDR"
openssl x509 -req -in server.req -CA ca.pem -CAkey privkey.pem -CAserial file.srl -out server.crt -days 3650 -passin pass:password
cat server.key server.crt > server.pem
openssl verify -CAfile ca.pem server.pem
openssl genrsa -out client.key 2048
openssl req -key client.key -new -out client.req -subj "/C=TH/ST=Surin/O=BigLittle/CN=client1/emailAddress=$EMAIL_ADDR"
openssl x509 -req -in client.req -CA ca.pem -CAkey privkey.pem -CAserial file.srl -out client.crt -days 3650 -passin pass:password
cat client.key client.crt > client.pem
openssl verify -CAfile ca.pem client.pem
chmod -R -v 444 /etc/.certs
