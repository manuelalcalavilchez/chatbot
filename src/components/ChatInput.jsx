import React, { useState } from 'react';
import { CHAT_CONFIG } from '../config/constants';

const ChatInput = ({ onEnviarMensaje }) => {
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    const mensajeLimpio = mensaje.trim();
    
    if (mensajeLimpio && mensajeLimpio.length <= CHAT_CONFIG.MAX_MESSAGE_LENGTH) {
      onEnviarMensaje(mensajeLimpio);
      setMensaje('');
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="mt-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe tu mensaje aquí..."
          maxLength={CHAT_CONFIG.MAX_MESSAGE_LENGTH}
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          disabled={!mensaje.trim()}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ChatInput;