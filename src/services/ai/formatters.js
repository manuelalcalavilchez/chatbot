export const formatPrompt = (mensaje) => {
  return `<s>[INST] ${mensaje} [/INST]`;
};

export const cleanResponse = (response, originalMessage) => {
  if (!response?.generated_text) {
    throw new Error('Respuesta inválida del modelo');
  }
  return response.generated_text.replace(originalMessage, '').trim();
};