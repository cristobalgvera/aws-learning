const moment = require("moment");

const greetings = {
  en: "Hello",
  es: "Hola",
  fr: "Bonjour",
  de: "Hallo",
  it: "Ciao",
  ja: "こんにちは",
  ko: "안녕하세요",
  pt: "Olá",
  ru: "Здравствуйте",
  zh: "你好",
};

exports.handler = async (event) => {
  const { name } = event.pathParameters;
  const { lang, ...info } = event.queryStringParameters;

  if (!name) throw new Error("Name is required");

  const message = `${greetings[lang] || greetings.en}, ${name}!`;

  const reponse = {
    message,
    info,
    timestamp: moment().unix(),
  };

  return {
    statusCode: 200,
    body: JSON.stringify(reponse),
  };
};
