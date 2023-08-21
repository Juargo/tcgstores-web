FROM tiangolo/node-frontend:10 as build-stage

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN REACT_APP_ENV=production npm run build


FROM ubuntu:18.04

RUN apt update -y \
    && apt install nginx -y \
    && apt-get install software-properties-common -y \
    && add-apt-repository ppa:certbot/certbot -y \
    && apt-get update -y \
    && apt-get install python-certbot-nginx -y \
    && apt-get clean

EXPOSE 80
EXPOSE 443

STOPSIGNAL SIGTERM
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY --from=build-stage /app/Docker/Deploy/nginx/default.conf /etc/nginx/sites-available/default

CMD ["nginx", "-g", "daemon off;"]