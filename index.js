const generator = require('./gpt3response');

(async () => {
  try {
    console.log(await generator.generate(`Question: How can I protect against fraud or scams?`));
  } catch (err) {
    console.log(err);
  }
})();







