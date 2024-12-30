import { useState, useCallback, useRef } from 'react';
import { obtenerRespuestaIA } from '../services/ai';
import { ERROR_MESSAGES } from '../config/constants';

export const useChat = () => {
  const [mensajes, setMensajes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');
  const abortControllerRef = useRef(null);

  const cancelarSolicitud = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
  };

  const enviarMensaje = useCallback(async (mensaje) => {
    setError('');
    cancelarSolicitud();
    
    setMensajes(prev => [...prev, { texto: mensaje, esUsuario: true }]);
    setCargando(true);

    try {
      const respuesta = await obtenerRespuestaIA(mensaje);
      setMensajes(prev => [...prev, { texto: respuesta, esUsuario: false }]);
    } catch (error) {
      setError(error.message || ERROR_MESSAGES.UNEXPECTED_ERROR);
    } finally {
      setCargando(false);
    }
  }, []);

  return {
    mensajes,
    cargando,
    error,
    enviarMensaje,
    cancelarSolicitud,
  };
};