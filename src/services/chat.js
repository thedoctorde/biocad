class ChatService {

    Init() {
        this.socket = new WebSocket('ws://127.0.0.1:8080/chat');
    }

    SubscribeOnMessageReceive(f) {
        this.socket.onmessage = f
    }

    Send(username, text) {
        let data = JSON.stringify({
            username,
            text
        });
        this.socket.send(data)
    }

    Destroy() {
        this.socket.onclose = function () {};
        this.socket.close();
    }

}

export default new ChatService();