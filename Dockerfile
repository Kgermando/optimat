 
FROM node:20.13.1-alpine3.19 as build
WORKDIR /app/src
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . ./
RUN npm run build --force

FROM node:20.13.1-alpine3.19
RUN addgroup -S optimat && adduser -S optimatuser -G optimat
USER optimatuser
WORKDIR /usr/app
COPY --from=build /app/src/dist/optimat/ ./
CMD node server/server.mjs
EXPOSE 4000
