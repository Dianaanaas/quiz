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
//   console.log(theme);
  if (theme.theme === 'Эльбрус') {
    const readF = await fs.readFile('Themes/elbrus.json', 'utf-8');
    const arrayQ = JSON.parse(readF);
    let scores = 0;
    console.log(`Количество очков: ${scores}`);
    for (const i of arrayQ) {
      const b = await inquirer.prompt(i);

      scores += await b.bonuses;
      console.log(`Количество очков: ${scores}`);
    //   const a = '';
    //   i.choices.forEach((el) => {
    //     el.value;
    //   });
    }
  }
}
quiz();

//       if (i.choices[0]) {
//         scores += 0;
//       } if (i.choices[1]) { scores += 2; } if (i.choices[2]) { scores += 5; }
//     } console.log(scores);
//   }
//   .prompt([
//     {
//       type: 'list',
//       name: 'bonuses',
//       message: 'Как дела?',
//       choices: [
//         { name: 'Норм', value: 0 },
//         { name: 'Хорошо', value: 0 },
//         { name: 'Плохо', value: 0 }
//       ]
//     }

//   ]);
// console.log(l);

// }
//
//   const arr = [{"question": "dsa?",
//   "answers": ["Владимир Владимирович", "Огурчик", "Рик"],
//   "balls": [0, 0, 5],
//   "image": "./image/4.Ric.txt"
//   },
//   ]
//   await inquirer.prompt([
//     {

//     }
//   ])
// }
//   .then((answers) => console.log(answers));
// let elbrus;
// if (theme) {
//   elbrus = await inquirer
//     .prompt([
//       {
//         type: 'list',
//         name: 'bonuses',
//         message: 'Выбери тему',
//         choices: [
//           { name: 'Эльбрус' },
//           { name: 'ХхЛхл' },
//         ],
//       }]);
// }

//     {
//       type: 'list',
//       name: 'bonuses',
//       message: 'Что делают программисты чтобы держаться на плаву?',
//       choices: [
//         { name: 'Дебажат', value: 0 },
//         { name: 'Консоль.ложут', value: 2 },
//         { name: 'Держат марку', value: 5 },
//       ],
//     },
//     {
//       type: 'list',
//       name: 'bonuses',
//       message: 'На одной из фотографий выпускников присутствует предмет, связанный с рыбалкой. Что это за предмет?',
//       choices: [
//         { name: 'Удочка', value: 0 },
//         { name: 'Сочок', value: 2 },
//         { name: 'Весло', value: 5 },
//       ],
//     },
//   ])
//   .then((answers) => console.log(answers))
