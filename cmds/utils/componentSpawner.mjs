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
    const files = [`${name}.njk`, `${name}.scss`, `${name}.json`];

    // проверяем на пустышку
    if (name === undefined) {
      console.error(chalk.red(`To create a component, one of the two keys must be used: \n${chalk.blue('-n')} or ${chalk.blue('--name')} pass the name after the key!`));
    } else {
      // тут объявляем что мы собираемся создать директорию с файлами
      await fs.mkdir(path.normalize(directory), { recursive: true }, (err) => {
        if (err) {
          console.error(chalk.red(err));
        }

        console.info(chalk.blue('------ * component * ------'));
        console.info(chalk.yellow(`Component directory created: ${directory}`));

        // после создания основной дир-рии, создадим внутри ещё одну.
        fs.mkdir(`${directory}${path.normalize(subdir)}`, { recursive: true }, (err) => {
          if (err) {
            console.error(chalk.red(err));
          }

          console.info(chalk.yellow(`Subdirectory created: ${subdir}`));
        });

        // перебираем массив, записываем значения передаваемое фун-ции
        // в переменные перед объявлением расширения файла и создаём файлы.
        files.forEach((file) => {
          fs.open(`${directory}${path.basename(file)}`, 'w', (err) => {
            if (err) {
              console.error(chalk.red(err));
            }

            console.info(chalk.green(`Component files created: ${file}`)); // в консоли, говорим что всё ок.
          });
        });
      });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export default createComponent;
