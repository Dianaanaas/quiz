const inquirer = require('inquirer');
const fs = require('fs').promises;

async function quiz() {
  const theme = await inquirer
    .prompt([
      { type: 'input', name: 'username', message: 'Введи имя:' },
      {
        type: 'list',
        name: 'theme',
        message: 'Выбери тему',
        choices: [
          { name: 'Эльбрус' },
          { name: 'ХхЛхл' },
        ],
      }]);
  if (theme.theme === 'Эльбрус') {
    await initQ('Themes/elbrus.json')
  }
  else {
    await initQ('Themes/tema2.json')
  }
}
async function initQ(path) {
  const readF = await fs.readFile(path, 'utf-8');
  const arrayQ = JSON.parse(readF);
  let scores = 0;
  console.log(`Количество очков: ${scores}`);
  for (const i of arrayQ) {
    const b = await inquirer.prompt(i);
    scores += await b.bonuses;
    if (b.bonuses) {
      console.log(`Ответ верный!! Количество очков: ${scores}`);
    } else {
      console.log(`Ответ неверный!! Количество очков: ${scores}`);
    }
  }
}
quiz();
