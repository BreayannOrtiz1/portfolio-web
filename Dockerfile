# Etapa 1: Construcción (Build)
FROM node:lts-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servidor (Producción)
FROM nginx:alpine AS runtime
# Copiamos solo el resultado final de la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html
# Copiamos una configuración básica de Nginx (opcional, por ahora usa la default)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]