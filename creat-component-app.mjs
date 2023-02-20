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

import { COMMANDS } from './cmds/index.mjs';
import { OPTIONS } from './cmds/options/options.mjs';

const yarg = yargs(hideBin(process.argv));

const runCLI = () => {
  return yarg
    .usage('Использование: $0 <команда> [опция]')
    .demandCommand(1)
    .version('1.0.0')
    .alias('version', 'v')
    .command(COMMANDS)
    .option(OPTIONS)
    .help('help', 'помощь по командам')
    .alias('help', 'h')
    .parse();

};

runCLI();
