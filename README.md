# Pasos para realizar los experimentos

## Crear un codespaces:

![codespaces](https://github.com/user-attachments/assets/97d7b532-42c4-4a97-a0d3-b8ff335b0ebe)

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

![image](https://github.com/user-attachments/assets/a6ad0e38-a74c-4219-970d-ceb4474b5321)

En este caso sería (para este ejemplo, en tu caso serán distintas):

``` js
wss://probable-fiesta-q9q4pjvqq73949w-8080.app.github.dev/:8080
``` 

* Detener el servidor
* Modificar la URL del websocket en cada aplicación: mobile, desktop.
* npm start
* En los clientes las aplicaciones web estarían corriendo en (para este ejemplo, en tu caso serán distintas):

``` js
https://probable-fiesta-q9q4pjvqq73949w-8080.app.github.dev/desktop
https://probable-fiesta-q9q4pjvqq73949w-8080.app.github.dev/mobile
```

Las dependecias que se instalarán serán:

* express
* ws

## Sitios web

No olvidar modificar en sketch.js para el sitio desktop y mobile esta parte 
del código:

``` js
// Connect to the WebSocket server
//let socketUrl = 'wss://cuddly-memory-7r95p6vgr7hxp4-8080.app.github.dev/:8080';
let socketUrl = 'ws://localhost:8080';
socket = new WebSocket(socketUrl);
```

