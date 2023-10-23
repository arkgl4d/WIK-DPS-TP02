FROM node
WORKDIR /TP.2.1
COPY package*.json ./
RUN npm install
COPY . .
RUN npx tsc
RUN adduser userdocker
USER userdocker
CMD ["node", "./build/index.js"]