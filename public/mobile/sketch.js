let socket;

function setup() {
    createCanvas(400, 400);
    background(220);

    // Connect to the WebSocket server
    //let socketUrl = 'wss://cuddly-memory-7r95p6vgr7hxp4-8080.app.github.dev/:8080';
    let socketUrl = 'ws://192.168.137.1:8080';

    socket = new WebSocket(socketUrl);

    socket.onopen = () => {
        console.log('Connected to server');
    };

    socket.onmessage = (event) => {
        event.data.text().then(text => {
            console.log(`Received message: ${text}`);
            // Handle the received message
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
    fill(0, 255, 0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text('Touch to move the circle', width / 2, height / 2);
}

function touchMoved() {
    if (socket && socket.readyState === WebSocket.OPEN) {
        let touchData = {
            type: 'touch',
            x: mouseX,
            y: mouseY
        };
        socket.send(JSON.stringify(touchData));
    }
    return false; // Prevent default
}
