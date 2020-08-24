FROM node:12-alpine
WORKDIR /usr/src/app
COPY *.js ./
EXPOSE 8000
RUN yarn global add pm2
CMD ["pm2-runtime", "ecosystem.config.js"]
