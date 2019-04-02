class RandomDataService {

    Init() {
        this.socket = new WebSocket('ws://127.0.0.1:8080/chart');
    }

    SubscribeOnMessageReceive(f) {
        this.socket.onmessage = f
    }

    Destroy() {
        this.socket.onclose = function () {};
        this.socket.close();
    }

}

export default new RandomDataService();
