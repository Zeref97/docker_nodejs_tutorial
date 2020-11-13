* Create Cert and Key
```
openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out certificate.pem
```
* Run
1. Broker: cd to folder broker
```
mosca -c index.js -v | pino-pretty
```
2. Api-engine: cd to api-engine
```
npm start
```
3. Run simulate smart device: cd to pi-base
```
npm start
```