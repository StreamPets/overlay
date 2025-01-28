FROM node:18 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM python:alpine
WORKDIR /app/build
COPY --from=build /app/build .
EXPOSE 8000

CMD ["python", "-m", "http.server", "8000"]