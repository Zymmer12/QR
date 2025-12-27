import axios from 'axios';
import { io } from 'socket.io-client';

// Use environment variable for production, fallback to localhost for dev
// Use environment variable if set, otherwise default to relative path (for same-origin) or localhost (for dev)
const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '' : 'http://localhost:3000');

console.log('Connecting to API:', API_URL || 'Current Origin');

export const api = axios.create({
    baseURL: `${API_URL}/api`,
});

export const socket = io(API_URL || undefined);
