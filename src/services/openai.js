import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const obtenerRespuestaIA = async (mensaje) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: mensaje }],
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error al obtener respuesta:', error);
    
    if (error.code === 'insufficient_quota') {
      return 'Lo siento, el servicio no está disponible en este momento debido a limitaciones de la API. Por favor, contacta al administrador del sistema.';
    }
    
    return 'Ha ocurrido un error al procesar tu mensaje. Por favor, intenta nuevamente.';
  }
};