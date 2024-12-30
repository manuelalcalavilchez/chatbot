// API Configuration
export const AI_MODEL = 'mistralai/Mistral-7B-Instruct-v0.1';

// Message Constants
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'No se pudo conectar con el servicio. Por favor, verifica tu conexión a internet.',
  SERVICE_UNAVAILABLE: 'El servicio no está disponible en este momento. Por favor, intenta más tarde.',
  UNEXPECTED_ERROR: 'Ha ocurrido un error inesperado. Por favor, intenta nuevamente.',
  NO_RESPONSE: 'Lo siento, no pude generar una respuesta.',
  ABORTED: 'La solicitud fue cancelada.',
};

// Chat Configuration
export const CHAT_CONFIG = {
  MAX_MESSAGE_LENGTH: 1000,
  MAX_MESSAGES: 50,
  TYPING_INDICATOR_DELAY: 500,
};