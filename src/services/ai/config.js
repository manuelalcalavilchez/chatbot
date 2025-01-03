import { HfInference } from '@huggingface/inference';

export const hf = new HfInference(import.meta.env.VITE_HUGGINGFACE_API_KEY);

export const AI_MODEL = 'https://api-inference.huggingface.co/models/mistral';
export const GENERATION_PARAMS = {
  max_new_tokens: 1024,
  temperature: 0.7,
  top_p: 0.95,
  repetition_penalty: 1.1,
};