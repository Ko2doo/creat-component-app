#!/usr/bin/env node

//  Консольная утилита для быстрого создания компонентов.
//  Используется совместно с nunjucks, позволяет забыть о ручном создании компонентов.
//  @author: NИ
//  @email: galaxyrobotix@gmail.com
//  @copyright: NИ 2023©
//# -----------------------------------------------------------------------------------
//  На выходе получаем следующую структуру файлов и папок:
//  component/
//    dependencies/
//    component.njk
//    component.scss
//    component.json
//# -----------------------------------------------------------------------------------

'use strict';


import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import createComponent from './utils/componentSpawner.mjs';
import injectStyle from './utils/injectStyles.mjs';

const yargsCliApp = () => {
  yargs(hideBin(process.argv))
    .usage('Использование: $0 <command> [option]')
    .command('create', 'объявить создание компонента', {
      // создадим объект name, для записи в него того
      // что будет приходить после ввода пользователем в командной строке.
      name: {
        type: 'string'
      }

    }, (argv) => {
      // вызовем нашу фун-цию из /utils
      // вытаскиваем данные из массива,
      // обращаемся к объекту name через argv.name
      // и получаем данные для нейминга компонента
      createComponent(argv.name)
    })
    // опции для вывода информации по команде -n --n
    .option('name', {
      type: 'string',
      alias: 'n',
      demandOption: false,
      describe: 'задать имя компонента'
    })
    // команда для импорта стилей компонента в главный стилевый файл:
    .command('inject', 'инъекция файла стилей компонента, в главный файл стилей', {
      // создадим объект, в который будет попадать строка
      inject: {
        type: 'string'
      }
    }, (argv) => {
      // вызовем нашу фун-цию
      injectStyle(argv.inject)
      console.log(argv.inject)
    })
    // опции для инъекций
    .option('inject', {
      type: 'string',
      alias: 'style',
      demandOption: false,
      describe: 'искать компонент по имени, и инъектировать стили компонента в главный файл стилей проекта.'
    })
    .demandCommand(1)
    .example("node $0 create --name='componentName'")
    .help('help', 'помощь по командам')
    .alias('help', 'h')
    .version('1.0.0')
    .alias('version', 'v')
    .parse()
    .argv
};

export default yargsCliApp;
