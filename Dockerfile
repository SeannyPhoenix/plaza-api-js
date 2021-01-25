FROM node:lts-alpine
EXPOSE 80
ENV PORT=80
COPY .npmrc /root/
WORKDIR /app
ADD package.json package-lock.json /app/
RUN npm --quiet install
COPY . /app
RUN npm run build
CMD [ "node", "build/server.js" ]
