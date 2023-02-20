// Утилита для инъекции стилей компонента в главный файл стилей
// с помощью конструкции @import '';
'use strict';

import fs from 'fs';
// не забываем про остальных юзеров, интегрируем утилиту path
import path from 'path';
import chalk from 'chalk';

const __dirname = path.resolve();


const injectStyle = async (style) => {
  try {
    const value = style; // переопределяем переменную, для красоты кода.

    const componentsPath = './src/templates/components';
    const assetsPath = './src/assets/styles';
    const importPath = '../../templates/components';

    const findDir = `${componentsPath}/${value}`;

    // здесь жёстко фиксируем путь до файла в который будем добавлять импорт стилей
    const injectTo = `${assetsPath}/main.scss`;

    // здесь подставляем максимально достоверный путь до файла стилей компонента.
    const styleImport = `\n@import '${importPath}/${value}/${value}.scss';`;

    // ищем директорию с компонентом, имя получаем из командной.
    await fs.readdir(path.resolve(__dirname, findDir), 'utf8', (err, files) => {
      if (err) {
        console.log(chalk.red(err)); // сообщаем ошибку в консоли
      } else {

        console.log(chalk.yellow(`Directory is found: ${findDir}`));

        // в цикле перебираем файлы и выводим инфу в консоль.
        for (let file of files) {
          console.log(chalk.blue(`\nComponent items is found: ${file}`));
        }

        // проверяем является ли файл стилей, файлом если да, импортируем его в главный файл стилей.
        fs.stat(`${findDir}/${value}.scss`, (errStatus, status) => {
          if (errStatus) {
            console.log(chalk.red(errStatus));
          }

          // это файл?
          if (status.isFile()) {
            console.log(chalk.white(`\n${value}.scss - действительно является файлом, добавляем импорт в главный файл стилей...`));

            // Добавим в конец main.scss, импорт файла стилей нашего найденного компонента
            fs.appendFile(injectTo, styleImport, 'utf8', (err) => {
              if (err) {
                console.log(chalk.red(err));
              } else {
                console.log(chalk.green(`\nFile: ${injectTo}\nSuccessfully appended import to: ${findDir}.scss`));
              }
            });
          }
        });
      }

    });

  } catch (error) {
    console.error(error.message);
  }
};

export default injectStyle;
