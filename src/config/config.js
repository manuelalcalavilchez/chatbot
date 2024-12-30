import { HfInference } from '@huggingface/inference';
import { AI_MODEL } from './constants';

export const hf = new HfInference(import.meta.env.VITE_HUGGINGFACE_API_KEY);

export const GENERATION_PARAMS = {
  max_new_tokens: 1024,
  temperature: 0.7,
  top_p: 0.95,
  repetition_penalty: 1.1,
};