FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .

EXPOSE 3000

RUN npm install

RUN npm run build

CMD npm run start

#docker build -t nextjs-app .
#docker run -p 3003:3000 nextjs-app
#docker tag nextjs-app:latest evenoahchoi/aura-page:v1.0
#docker push evenoahchoi/aura-page:v1.0
