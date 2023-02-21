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
        console.error(chalk.red(err)); // сообщаем ошибку в консоли
      } else {
        console.info(chalk.yellow(`Directory is found: ${findDir}`));

        // в цикле перебираем файлы и выводим инфу в консоль.
        for (let file of files) {
          console.info(chalk.blue(`\nComponent items is found: ${file}`));
        }

        // проверяем является ли файл стилей, файлом если да, импортируем его в главный файл стилей.
        fs.stat(`${findDir}/${value}.scss`, (errStatus, status) => {
          if (errStatus) {
            console.error(chalk.red(errStatus));
          }

          // это файл?
          if (status.isFile()) {
            console.info(chalk.white(`\n${value}.scss - is indeed a file, add the import to the main stylesheet...`));

            // Добавим в конец main.scss, импорт файла стилей нашего найденного компонента
            fs.appendFile(injectTo, styleImport, 'utf8', (err) => {
              if (err) {
                console.error(chalk.red(err));
              } else {
                console.info(chalk.green(`\nFile: ${injectTo}\nSuccessfully appended import to: ${findDir}.scss`));
              }
            });
          } else {
            console.error(chalk.red(`\n${value} - is not a file.`));
          }
        });
      }
    });
  } catch (error) {
    console.error(error.message);
  }
};

export default injectStyle;
