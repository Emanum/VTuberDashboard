#RUN 

docker build -t emanum/vtuberbackend .
docker run -p 8180:3000 -d emanum/vtuberbackend


# Used Tutorials 

https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-1


