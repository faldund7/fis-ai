const generator = require('./gpt3response');

(async () => {
  try {
    console.log(await generator.generate(`Good Morning Hackathon Participants!`));
  } catch (err) {
    console.log(err);
  }
})();







