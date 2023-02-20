// Коллекция опций
'use strict';

export const OPTIONS = {
  'name': {
    type: 'string',
    alias: 'n',
    demandOption: false,
    describe: 'задать имя компонента'
  },

  's': {
    type: 'string',
    alias: 'style',
    demandOption: false,
    describe: 'искать компонент по имени - для импорта стилей компонента в главный файл стилей проекта.'
  }
};
