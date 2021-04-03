# Typescript Node Express 
https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-1

## Install Typescript compiler

```
npm install -g typescript
```

## Docker 
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

```
docker build -t emanum/vtuberbackend .
docker run -p 3000:3000 -d emanum/vtuberbackend
```

# Swagger Editor

Online Version: https://editor.swagger.io/

Local:
```
docker pull swaggerapi/swagger-editor
docker run -p 80:8080 swaggerapi/swagger-editor
```