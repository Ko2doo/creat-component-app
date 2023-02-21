// Коллекция опций
'use strict';

export const OPTIONS = {
  name: {
    type: 'string',
    alias: 'n',
    demandOption: false,
    describe: 'pass component name',
  },

  s: {
    type: 'string',
    alias: 'style',
    demandOption: false,
    describe: "lookup component by name - to import the component's styles into the main stylesheet of the project.",
  },
};
