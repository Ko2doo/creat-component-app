## creat-component-app

<p>
  Данная утилита позволяет забыть о ручном создании компонентов и импорте файла стилей компонента в главный файл стилей проекта.
  <br>
  Создано для совместного использования вместе с <b>nunjucks</b>, но может использоваться и в не его зависимости.
  <br>
  Если структура файлов и папок в вашем проекте другая, вы можете поменять пути в соответствии с вашей структурой.
  <br>
  По умолчанию создана определенная структура проекта.
  <br>
  Для демонстрации создан компонент и подключен файл стилей компонента в главный стилевой файл.
</p>

---

## Папка проекта

- Предпологается что папка с проектом будет как на примере ниже:
- \*если ваш проект выглядит иначе, вы всегда можете поменять пути в скриптах: **componentSpawner.mjs** и в **injectStyles.mjs\***

```
src
├── assets
│   └── styles
│       └── main.scss
└── templates
    └── components
```

---

## Папка после добавления компонента:

- после создания компонента структура папок и файлов с шаблонами меняется на:

```
src/templates
└── components
    └── MyFirstComponent
        ├── dependencies
        ├── MyFirstComponent.json
        ├── MyFirstComponent.njk
        └── MyFirstComponent.scss
```

---

## Возможности

- Скрипт для создания компонента с определенным набором файлов и папок
- Скрипт для добавления `@import 'path/to/component/component.scss';` в главный файл стилей в проекте проверяется существование указанной пользователем директории через консоль, если компонент с таким именем найден, то произволится добавление в `main.scss` файл импорта с полным путём до файла стилей компонента.

---

## Использование:

- скачиваем необходимые зависимости:
  - `npm i`
- После установки зависимостей можно использовать.
- Для просмотра команд можно ввести просто:
- `creat-component-app`
- Чтобы создать компонент, необходимо вызвать следующие команды:
  - `creat-component-app create -n component_name`
  - или
  - `creat-component-app create --name component_name`
- Функция подставит название которое вы передали в командной строке и создаст на его основе необходимый набор файлов и папок.
- Чтобы добавить `@import 'componentName.scss';` до компонента в главный файл стилей необходимо ввести имя компонента, если скрипт его найдёт то добавит импорт стилей компонента в главный файл стилей, в противом случае выведет информацию об ошибке в консоль. Воспользуйтесь следующими командами:
  - `creat-component-app import -s component_name`
  - или
  - `creat-component-app import --style component_name`

<br>

---

## Про пути

- Пути для создания компонент можно поправить в файле <b>componentSpawner.mjs</b>
- Пути для добавления импорта стилей компонента в главный файл стилей проекта можно править в файле <b>injectStyles.mjs</b>
  <br>

* в константе `files` находятся маски с переменными в которые будут записываться данные пришедшие от пользователя и расширениями для файлов

* в константе `directory` находится путь до главной директории в маске передаётся переменная, в которую будет записываться название компонента исходя из полученных данных от пользователя.

* Зачем нужны эти маски? Вместо обычных путей? Чтобы не писать вручную название файла, расширение и название папки компонента, данные подставятся после того как пользователь введёт их в консоли.

* Маски выглядят следующим образом:
  - Директории: `./${name}/`
  - Файлы: `${name}.njk`

---

---

## Удобства

- Для удобства, опции и команды отделены.

---
