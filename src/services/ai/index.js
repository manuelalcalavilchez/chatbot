import { hf, GENERATION_PARAMS } from './config';
import { formatPrompt, cleanResponse } from './formatters';
import { handleApiError } from '../../utils/errorHandling';
import { AI_MODEL } from '../../config/constants';

const generateResponse = async (mensaje) => {
  const prompt = formatPrompt(mensaje);
  
  try {
    return await hf.textGeneration({
      model: AI_MODEL,
      inputs: prompt,
      parameters: GENERATION_PARAMS,
    });
  } catch (error) {
    console.error('Error en la generación:', error);
    throw error;
  }
};

export const obtenerRespuestaIA = async (mensaje) => {
  try {
    const response = await generateResponse(mensaje);
    return cleanResponse(response, mensaje);
  } catch (error) {
    throw handleApiError(error);
  }
};