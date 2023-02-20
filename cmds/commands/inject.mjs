// команда import -s --style
'use strict';
import injectStyle from "../utils/injectStyles.mjs";

export const command = 'import';
export const describe = 'Импортирование файла стилей компонента, в главный файл стилей';

export const builder = yargs => {};
export const handler = function (argv) {
  argv.output = injectStyle(argv.style);
  // console.log(argv);
}

