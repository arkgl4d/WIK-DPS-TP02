FROM node AS build
WORKDIR /TP.2.2
COPY package*.json ./
RUN npm install
COPY . .
RUN npx tsc

FROM node:14-slim
WORKDIR /TP.2.2
COPY --from=build /TP.2.2/build/index.js ./build/index.js
COPY --from=build /TP.2.2/node_modules ./node_modules
COPY --from=build /TP.2.2/package.json ./
RUN adduser userdocker
USER userdocker
CMD ["node", "./build/index.js"]