import { ERROR_MESSAGES } from '../config/constants';

export class ApiError extends Error {
  constructor(message, type = 'UNEXPECTED_ERROR') {
    super(message);
    this.name = 'ApiError';
    this.type = type;
  }
}

export const handleApiError = (error) => {
  console.error('Error en la API:', error);

  if (!navigator.onLine) {
    throw new ApiError(ERROR_MESSAGES.NETWORK_ERROR, 'NETWORK_ERROR');
  }

  if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
    throw new ApiError(ERROR_MESSAGES.NETWORK_ERROR, 'NETWORK_ERROR');
  }

  if (error.message.includes('HTTP error!')) {
    throw new ApiError(ERROR_MESSAGES.SERVICE_UNAVAILABLE, 'SERVICE_UNAVAILABLE');
  }

  throw new ApiError(ERROR_MESSAGES.UNEXPECTED_ERROR, 'UNEXPECTED_ERROR');
};