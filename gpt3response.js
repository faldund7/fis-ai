const OPENAI_API_KEY = require('./env')
//OPENAI_API_KEY ='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';
// process.env.OPENAI_SECRET_KEY
const got = require('got');

async function generate(prompt) {
  const url = 'https://api.openai.com/v1/engines/davinci/completions';
  const params = {
    "prompt": prompt,
    "max_tokens": 160,
    "temperature": 0.1,
    "frequency_penalty": 0.5
  };
  const headers = {
    'Authorization': `Bearer ${OPENAI_API_KEY}`,
  };

  const response = await got.post(url, { json: params, headers: headers }).json();
  output = `${prompt}${response.choices[0].text}`;
  return output;
}

module.exports = { generate };