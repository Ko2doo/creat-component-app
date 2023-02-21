// команда creat -n --name
'use strict';
import createComponent from '../utils/componentSpawner.mjs';

export const command = 'create';
export const describe = 'Creating a Component';

export const builder = (yargs) => {};
export const handler = function (argv) {
  argv.output = createComponent(argv.name);
  // console.log(argv);
};
