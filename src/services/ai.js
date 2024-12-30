import { HfInference } from '@huggingface/inference';
import { handleApiError } from '../utils/errorHandling';
import { AI_MODEL } from '../config/constants';

const hf = new HfInference(import.meta.env.VITE_HUGGINGFACE_API_KEY);

const generateResponse = async (mensaje) => {
  const prompt = `<s>[INST] ${mensaje} [/INST]`;
  
  return await hf.textGeneration({
    model: AI_MODEL,
    inputs: prompt,
    parameters: {
      max_new_tokens: 1024,
      temperature: 0.7,
      top_p: 0.95,
      repetition_penalty: 1.1,
    },
  });
};

export const obtenerRespuestaIA = async (mensaje) => {
  try {
    const response = await generateResponse(mensaje);
    return response.generated_text.replace(mensaje, '').trim();
  } catch (error) {
    throw handleApiError(error);
  }
};