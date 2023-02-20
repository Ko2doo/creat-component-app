// Утилита для создания компонента

'use strict';

import fs from 'fs';
// не забываем про остальных юзеров, интегрируем утилиту path
import path from 'path';
import chalk from 'chalk';

const createComponent = async (name) => {
  try {
    const directory = `./src/templates/components/${name}/`;
    const subdir = './dependencies/';

    // передадим в переменную до расширения файла,
    // имя, пришедшее из функции, и подставим его.
    const files = [
      `${name}.njk`,
      `${name}.scss`,
      `${name}.json`
    ];

    // проверяем на пустышку
    if (name === undefined) {
      console.log(chalk.red(`Чтобы создать компонент, необходимо использовать ключ: \n${chalk.blue('-n')} или ${chalk.blue('--name')} после ключа передать ему имя!`));
    } else {
      // тут объявляем что мы собираемся создать директорию с файлами
      await fs.mkdir(path.normalize(directory), {recursive: true}, (err) => {
        if (err) throw err;
        console.log(chalk.blue('------ * component * ------'));
        console.log(chalk.yellow(`Component directory created: ${directory}`));

        // после создания основной дир-рии, создадим внутри ещё одну.
        fs.mkdir(`${directory}${path.normalize(subdir)}`, {recursive: true}, (err) => {
          if (err) throw err;
          console.log(chalk.yellow(`Subdirectory created: ${subdir}`));
        });

        // перебираем массив, записываем значения передаваемое фун-ции
        // в переменные перед объявлением расширения файла и создаём файлы.
        files.forEach(file => {
          fs.open(
            `${directory}${path.basename(file)}`,
            'w',
            (err) => {
              if (err) throw err;
              console.log(chalk.green(`Component files created: ${file}`)); // в консоли, говорим что всё ок.
            }
          );
        });

      });
    }


  } catch (error) {
    console.error(error.message);
  }
};

export default createComponent;
