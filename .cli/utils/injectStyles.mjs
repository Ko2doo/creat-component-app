// Утилита для инъекции стилей компонента в главный файл стилей
// с помощью конструкции @import '';
'use strict';

import fs from 'fs';
// не забываем про остальных юзеров, интегрируем утилиту path
import path from 'path';
import chalk from 'chalk';

const __dirname = path.resolve();


const injectStyle = async (inject) => {
  try {
    const componentsPath = './src/templates/components';
    const assetsPath = './src/assets/styles';
    const importPath = '../../templates/components';

    const findDir = `${componentsPath}/${inject}`;

    // здесь жёстко фиксируем путь до файла в который будем добавлять импорт стилей
    const injectTo = `${assetsPath}/main.scss`;

    // здесь подставляем максимально достоверный путь до файла стилей компонента.
    const styleImport = `\n@import '${importPath}/${inject}/${inject}.scss';`;

    // ищем папку и файл, пришедший из консольной строки
    await fs.readdir(path.resolve(__dirname, findDir), 'utf8', (err, files) => {
      if (err) {
        console.log(chalk.red(err)); // сообщаем ошибку в консоли
      } else {
        console.log(chalk.blue(`Directory is found: ${findDir}\nComponent files is found: ${files}`)); // если находим файл, сообщаем об успехе.

        // Добавим в конец main.scss файла импорт файла стилей нашего найденного компонента
        fs.appendFile(injectTo, styleImport, 'utf8',(err) => {
            if (err) {
              console.log(chalk.red(err));
            } else {
              console.log(chalk.cyan(`This file ${injectTo} successfully appended import to: ${findDir}.scss`));
            }
          }
        );
      }
    });

  } catch (error) {
    console.error(error.message);
  }
};

export default injectStyle;
