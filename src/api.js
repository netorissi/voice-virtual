
import io from 'socket.io-client';

const WEBSOCKET_URL = "ws://localhost:5000";

const socket = io(WEBSOCKET_URL);

export const VOICE = number => {
	console.log("ENVIANDO O NUMERO: " + number)
	socket.emit("VOICE", {number: number});
};

export const IDDLE = number => {
	socket.emit("IDDLE", {number: number});
};