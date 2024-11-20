# Usar una imagen base de Node.js
FROM node:16

# Crear y usar el directorio de la aplicación en el contenedor
WORKDIR /usr/src/app

# Copiar archivos del proyecto al contenedor
COPY my_api/package*.json ./
COPY my_api/index.js ./

# Copiar el resto de los archivos de la carpeta my_api al contenedor
COPY my_api ./my_api

# Instalar dependencias
RUN npm install

# Exponer el puerto 3000 (o el que use su aplicación)
EXPOSE 3004

# Comando para iniciar la aplicación
CMD ["node", "my_api/index.js"]
