# node-web
Repo de prueba de sitio web con NodeJs y express web framework.



```
git clone git@github.com:roxtrongo/node-web.git
cd node-web
cd app
npm install
npm start
curl http://localhost:3000
<h1>Express NodeJS Web Framework</h1>%
```


Ejecutar en Docker

```
docker build -t node-web . 
docker run -p 3000:3000 node-web
docker run -p 3000:3000 roxtrongo/node-web:0.0.1
```