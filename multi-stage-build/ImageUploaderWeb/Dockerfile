# builder
FROM node:16.16 as react-builder
WORKDIR /app-src
COPY . .

ARG REACT_APP_API_HOST

RUN sh ./create-env-file.sh REACT_APP_API_HOST=${REACT_APP_API_HOST}

RUN npm install
RUN npm run build

# final image
FROM nginx:stable-alpine
COPY --from=react-builder /app-src/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
