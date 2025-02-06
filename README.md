# 🎵 BOSE Landing Page

**A modern, responsive landing page for BOSE audio equipment, built from a Figma design specification.** The implementation focuses on pixel-perfect recreation of the design with full responsiveness.

---

## 🚀 Project Overview

This landing page is a responsive web implementation for **BOSE**. The site features:

- 📸 Full-screen header with a background image.
- 🎧 Product recommendations grid.
- 🗂️ Category browsing sections.
- 📞 Contact information.

All elements are **precisely matched** to the provided design specifications.

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3/SCSS**
- CSS Grid & Flexbox for layouts
- Mobile-first responsive design
- **BEM methodology** for CSS naming
- CSS Reset (**Meyer Reset**)
- **Figma** (design source)

---

## 🌟 Features

- 🎯 **Pixel-perfect implementation** from Figma design.
- 📱 **Responsive design** supporting mobile, tablet, and desktop views.
- 🧭 **Interactive navigation menu** with smooth transitions.
- 🛍️ **Product grid** with responsive image layouts.
- 📂 **Category browsing** with dynamic image grids.
- 📝 **Contact form** with:
  - Placeholders suggesting what to enter.
  - Validation of form fields (required, email, phone number, etc.).
  - Prevention of form submission if fields are not filled correctly.
  - No page reload on form submission.
- ✨ **Interactive hover states** and animations.
- 🖼️ Full-width **header and footer** with background images.

---

## 📝 Form Functionality (JavaScript)

The contact form includes the following JavaScript features:

- Placeholders: Suggest what to enter in each field (e.g., name, email, phone number).
- Validation: Ensures fields are filled correctly:
- Required fields must not be empty.
- Email fields must contain a valid email address.
- Phone fields must contain a valid phone number.
- Prevent Submission: The form will not be submitted if any field is invalid.
- No Page Reload: The page does not reload on form submission, providing a smoother user experience.

---

## 🎨 Design Source

The project was implemented based on the following : [_BOSE Landing Page Figma Design_](<https://www.figma.com/file/DtkQmQ797hk0nI4KfMi2Uq/BOSE-New-Version?type=design&node-id=6703-88&t=L7eKz5YKLN0m5WxR-0)>).

Design implementation includes:

- Typography: Inter font family
- Color schemes and gradients
- Spacing and layout measurements
- Component dimensions and positioning
- Responsive breakpoints
- Interactive states

---

## 🔗 Demo Link

- [DEMO_LINK](https://bagirovoleg.github.io/layout_miami/).

Design implementation includes:

- **Typography:** _Inter font family_
- **Color schemes** and gradients
- **Spacing** and layout measurements
- **Component dimensions** and positioning
- **Responsive breakpoints**
- **Interactive states**

---

## 🖥️ Setup Instructions

1. **Clone the repository:**

git clone [repository-url]

2. **Navigate to the project directory:**

cd bose-landing

3. **To start the development server:**

npm start

---

## 🔧 Development

The project uses SCSS for styling, which has been compiled to CSS. If you want to make style changes:

1. **Install SASS** (if you haven't already):

   npm install -g sass

2. **To start:**

   npm start

3. **Install OAS:**

   npm install aos --save

---

## 📏 Responsive Breakpoints

As per Figma design:

- **Mobile:** `< 744px`
- **Tablet:** `744px - 1259px`
- **Desktop:** `≥ 1260px`

---

## 📂 Project Structure

```plaintext
bose-landing/
├── index.html
├── main.css
├── images/*
├── scss/
│   └── main.scss
└── styles/
  ├── blocks/*
  │  ├── header/*
  │  ├── main/*
  │  └── footer.scss
  ├── mixins/*
  └── utils/*
```

---

## 🌐 Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)

---

## 📝 Implementation Notes

- The **CSS** is compiled from SCSS source files.
- Uses **CSS Grid** for main layouts with **Flexbox** for component-level arrangements.
- Implements **BEM methodology** for maintainable CSS architecture.
- All images and icons are **optimized for web use**.
- Responsive breakpoints match the design system requirements.

---

👨‍💻 **Created by:** _Oleg Bagirov_
