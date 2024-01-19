const inquirer = require('inquirer');
const fs = require('fs').promises;
const audio = require('sound-play')

async function hello() {
  const theme = await inquirer
    .prompt([
      { type: 'input', name: 'username', message: 'Введи имя:' }])
    .then((message) => console.log(`\nПривет, ${message.username}!\n`));
  await quiz();
}

async function quiz() {
  const theme = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'theme',
        message: 'Выбери тему',
        choices: [
          { name: 'Эльбрус' },
          { name: 'Кино' },
        ],
      }]);
  if (theme.theme === 'Эльбрус') {
    await initQ('Themes/elbrus.json')
  } else {
    await initQ('Themes/tema2.json');
  }
  await quiz();
}
async function initQ(path) {
  const readF = await fs.readFile(path, 'utf-8');
  const arrayQ = JSON.parse(readF);
  let scores = 0;
  console.log(`Количество очков: ${scores}\n`);
  for (const i of arrayQ) {
    const objAnswer = await inquirer.prompt(i);
    let str = '';
    for (const j of i.choices) {
      if (j.value) { str += j.name; }
    }
    scores += await objAnswer.bonuses;
    if (objAnswer.bonuses) {
      console.log(`\nОтвет верный!! Количество очков: ${scores}\n`);
      audio.play('./kotik.mp3')
    } else {
      console.log(`\nОтвет неверный!! Количество очков: ${scores}\nПравильный ответ: ${str}\n`);
      audio.play('./gav.mp3')
    }
  }
 await console.log(`\nПоздравляяяяяем!!111!!!! Ты набрал ${scores} очков\n`);
 audio.play('./pole-chudes-priz.mp3')
}
hello();
