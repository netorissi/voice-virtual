
import io from 'socket.io-client';

const WEBSOCKET_URL = "ws://localhost:5000";

const socket = io(WEBSOCKET_URL);

export const OI_VOICE = number => {
	socket.emit("OI_VOICE", {number: number});
};

export const FALA_VOICE = number => {
	socket.emit("FALA_VOICE", {number: number});
};

export const LUTA_VOICE = () => {
	socket.emit("LUTA_VOICE");
};

export const PULA_VOICE = () => {
	socket.emit("PULA_VOICE");
};

export const DANCA_VOICE = () => {
	socket.emit("DANCA_VOICE");
};

export const MOSCANDO_VOICE = () => {
	socket.emit("MOSCANDO_VOICE");
};

export const YEAH_VOICE = () => {
	socket.emit("YEAH_VOICE");
};