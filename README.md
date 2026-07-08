# MyBike landing page

Адаптивний односторінковий лендинг велосипедного бренду **MyBike**, реалізований за макетом [MYBIKE landing (Figma)](https://www.figma.com/file/NZQAIydtHo5QkINyGLHNcq/BIKE-New-Version?node-id=0%3A1).

## Demo

- [https://pavlosich.github.io/layout_miami/](https://pavlosich.github.io/layout_miami/)

## Технології

- **HTML5** — семантична розмітка (`header`, `nav`, `main`, `section`, `footer`, `form`)
- **SCSS** — модульні стилі з змінними, міксинами та `@import`
- **JavaScript (Vanilla JS)** — мінімальна логіка для меню та форми
- **Parcel** — збірка проєкту, компіляція SCSS та live reload
- **Mate Scripts** — запуск, лінтинг, збірка та деплой на GitHub Pages
- **Google Fonts** — шрифт [Poppins](https://fonts.google.com/specimen/Poppins)
- **SVG** — іконки меню, телефону та закриття
- **GitHub Pages** — хостинг demo-версії

## Методи реалізації

### BEM

Стилі та розмітка організовані за методологією **BEM** (Block Element Modifier). Кожен блок винесено в окремий SCSS-файл у `src/styles/blocks/`:

- `header`, `menu`, `grid`, `compare-bikes`, `details`, `place`, `contact-us`, `footer` тощо.

### Адаптивність

Використано **mobile-first** підхід з трьома брейкпоінтами через SCSS-міксини:

| Міксин      | Ширина екрана |
|-------------|---------------|
| `onPhone`   | від 320px     |
| `onTablet`  | від 744px     |
| `onDesktop` | від 1260px    |

Для різних розмірів екрана підключено окремі фонові зображення header (`cover320.png`, `cover_744.png`, `Cover_photo.png`).

### CSS Grid і Flexbox

- **CSS Grid (12 колонок)** — сітка контенту на планшетах і десктопах (`grid`, `grid__item--1-4`, `grid__item--desktop-1-8` тощо), згенерована через SCSS `@for`
- **Flexbox** — вертикальне вирівнювання контенту в header (`header__content`)

### Мобільне меню без JS

Бічне меню реалізовано через **CSS `:target`** та hash-навігацію:

- відкриття: посилання `href="#menu"`
- закриття: посилання `href="#"`
- анімація: `transform: translateX()` + `transition`

JavaScript лише блокує прокрутку сторінки під відкритим меню (`page__body--with-menu { overflow: hidden }`).

### Інтерактивність

- **`:hover`-ефекти** — збільшення фото в секціях Compare Bikes та Details (`transform: scale(1.2)`)
- **`scroll-behavior: smooth`** — плавний скрол по якорних посиланнях
- **Форма зворотного зв'язку** — `preventDefault()` при submit, очищення полів через `form.reset()`
- **Контакти** — реальні посилання `tel:`, `mailto:` та Google Maps (`target="_blank"`)

### Структура проєкту

```
src/
├── index.html          # розмітка сторінки
├── scripts/main.js     # логіка меню та форми
├── images/             # зображення, іконки, логотипи
└── styles/
    ├── main.scss       # точка входу стилів
    ├── utils/          # змінні та міксини
    └── blocks/         # BEM-блоки
```

## Запуск локально

```bash
git checkout develop
npm install
npm start
```

## Деплой

```bash
npm run deploy
```

## Checklist

Перевірка якості верстки: [checklist.md](./checklist.md)
