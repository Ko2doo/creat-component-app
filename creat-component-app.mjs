#!/usr/bin/env node

//  @ru: Консольная утилита для быстрого создания компонентов.
//  @en: Console utility for quick creation of components.
//  @ru: Используется совместно с nunjucks, позволяет забыть о ручном создании компонентов.
//  @en: Used in conjunction with nunjucks, it allows you to forget about manually creating components.
//  @ru: Так же позволяет импортировать файл стилей компонента в главый файл в проекте.
//  @en: It also allows you to import the component style file into the main file in the project.
//  @author: NИ
//  @email: galaxyrobotix@gmail.com
//  @copyright: NИ 2023©
//# -----------------------------------------------------------------------------------
//  @ru: На выходе получаем следующую структуру файлов и папок:
//  @en: The output is the following file and folder structure:
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
  return yarg.usage('Usage: $0 <command> [option]').demandCommand(1).version('1.0.0').alias('version', 'v').command(COMMANDS).option(OPTIONS).help(false).parse();
};

runCLI();
