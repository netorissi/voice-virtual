
import io from 'socket.io-client';

const WEBSOCKET_URL = "ws://localhost:5000";

const socket = io(WEBSOCKET_URL);

// export const OI_VOICE = number => {
// 	socket.emit("OI_VOICE", {number: number});
// };

export const FALA_VOICE1 = () => {
	socket.emit("FALA_VOICE1");
};

export const ROTATE_VOICE = () => {
	socket.emit("ROTATE_VOICE");
};

export const PULA_VOICE = () => {
	socket.emit("PULA_VOICE");
};

export const DANCA_VOICE = () => {
	socket.emit("DANCA_VOICE");
};