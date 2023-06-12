import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: import.meta.env.PUBLIC_OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);


export const getFunFactAboutPokemon = async (pokemonName: string) => {

    delete configuration.baseOptions.headers['User-Agent'];

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Dame un breve descripcion del pokemon ${pokemonName}`,
      temperature: 0.7,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    console.log(response);

    return response.data.choices[0].text || `No encontramos información acerca del pokemon ${pokemonName}.`;
};
