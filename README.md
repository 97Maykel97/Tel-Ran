# My Library

Учебный проект на React и Vite: электронная библиотека с выводом книг и группировкой по жанрам.

## Возможности

- Отображение общего каталога из восьми книг.
- Группировка книг по жанрам через `filter()`.
- Создание карточек книг через `map()`.
- Статистика: общее число книг и количество доступных для выдачи.
- Статус доступности для каждой книги.
- Отметка «Классическое издание» для книг, выпущенных до 2000 года.
- Сообщения для пустого каталога и пустой категории.
- Универсальный компонент `Card` с `children`.
- SCSS Modules для изолированных стилей компонентов.

## Технологии

- React
- Vite
- JavaScript
- Sass / SCSS Modules

## Запуск

Установить зависимости:

```bash
npm install
```

Запустить проект в режиме разработки:

```bash
npm run dev
```

Собрать production-версию:

```bash
npm run build
```

Проверить код линтером:

```bash
npm run lint
```

## Структура проекта

```text
src/
├── components/
│   ├── AvailabilityBadge/
│   ├── BookCard/
│   ├── BookList/
│   ├── Card/
│   ├── Footer/
│   ├── Header/
│   └── LibraryStats/
├── data/
│   └── books.js
├── App.jsx
├── App.module.scss
├── index.scss
└── main.jsx
```

## Дерево компонентов

```text
App
├── Header
├── LibraryStats
├── BookList
│   └── BookCard
│       ├── Card
│       └── AvailabilityBadge
└── Footer
```

## Поток данных

Массив книг экспортируется из `src/data/books.js`. Компонент `App` передаёт его в `LibraryStats` и `BookList`. `BookList` фильтрует книги по жанру и передаёт каждую книгу в `BookCard` через prop `book`.
