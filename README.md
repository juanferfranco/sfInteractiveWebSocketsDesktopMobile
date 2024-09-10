# Pasos para realizar los experimentos

## Servidores

El proyecto cuenta con dos servidores. Un servidor web y un servidor 
que gestiona los websockets. La tarea del servidor web es enviar dos 
posibles sitios. Un sitio móvil y un sitio para escritorio. El sitio 
móvil leerá la posición x,y del sensor touch y la enviará al sitio 
de escritorio. Con esta información se colocará la posición 
en un círculo en el sitio de escritorio. La comunicación entre los 
dos sitios se realizará mediante websockets.

* El archivo server.js contiene el código de los servidores.
* En la carpeta public están los dos sitios web que estarán.

Los pasos para ejecutar la aplicación son:

* Clonar el repositorio en codespaces.
* Ejecutar npm install
* Ejecutar npm start
* Leer la url del websocket
* Detener el servidor
* Modificar la URL del websocket en cada aplicación: mobil, desktop.
* npm start

## Sitios web


