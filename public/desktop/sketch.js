let socket;
let circleX = 200;
let circleY = 200;

function setup() {
    createCanvas(400, 400);
    background(220);

    // Connect to the WebSocket server
    //let socketUrl = 'wss://cuddly-memory-7r95p6vgr7hxp4-8080.app.github.dev/:8080';
    let socketUrl = 'ws://localhost:8080';
    socket = new WebSocket(socketUrl);

    socket.onopen = () => {
        console.log('Connected to server');
    };

    socket.onmessage = (event) => {
        event.data.text().then(text => {
            console.log(`Received message: ${text}`);
            let data = JSON.parse(text);
            if (data.type === 'touch') {
                circleX = data.x;
                circleY = data.y;
            }
        }).catch(error => {
            console.error('Error reading message', error);
        });
    };

    socket.onclose = () => {
        console.log('Disconnected from server');
    };

    socket.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    socket.onping = () => {
        socket.send('pong');
    };
}

function draw() {
    background(220);
    fill(255, 0, 0);
    ellipse(circleX, circleY, 50, 50);
}
