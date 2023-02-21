// команда import -s --style
'use strict';
import injectStyle from '../utils/injectStyles.mjs';

export const command = 'import';
export const describe = 'Importing a Component Style File into the Main Style File';

export const builder = (yargs) => {};
export const handler = function (argv) {
  argv.output = injectStyle(argv.style);
  // console.log(argv);
};
