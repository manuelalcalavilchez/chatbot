import { AI_ENDPOINT, GENERATION_PARAMS, hf } from './config';

export const obtenerRespuestaIA = async (mensaje) => {
  try {
    const response = await hf.textGeneration({
      model: AI_ENDPOINT,
      inputs: mensaje,
      parameters: GENERATION_PARAMS,
    });

    if (!response.ok) {
      throw new Error(`Error en la respuesta del servidor: ${response.statusText}`);
    }

    const data = await response.json();
    return data.generated_text;
  } catch (error) {
    console.error('Error al obtener respuesta:', error);
    return `Lo siento, ha ocurrido un error: ${error.message}. Por favor, intenta nuevamente.`;
  }
};