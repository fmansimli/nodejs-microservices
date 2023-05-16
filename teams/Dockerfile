FROM node:alpine as builder
WORKDIR /temp-apps/app

COPY package*.json ./
RUN npm install

COPY ./ ./

RUN npm run build

FROM node:alpine
WORKDIR /apps/app

COPY --from=builder /temp-apps/app/dist/ ./dist/

#COPY package*.json ./
#RUN npm install --omit=dev
#RUN npm install -g pm2
#CMD ["npm","start"]

COPY ./ ./
RUN npm install

EXPOSE 4002
CMD ["npm","run","dev"]

