# KeepItSimple Framework v2.0

## Introduction

**KeepItSimple** is a lightweight, modern, and versatile CSS library designed for developers who value speed and clean aesthetics. Version 2.0 introduces a robust grid system, expanded UI components, and utility classes while remaining zero-dependency.

## Getting Started

Include `style.css` in your project:
```html
<link rel="stylesheet" href="style.css">
```

## Core Features

### 1. Advanced Theming
Switch between light and dark modes by toggling the `.dark` class on the `<body>`.
```html
<body class="dark">
```

### 2. Layout & Grid System
- **`.container`**: Max-width 1100px centered wrapper.
- **`.grid`**: Automatic responsive grid (min 280px per item).
- **`.row` & `.col`**: Traditional flex-based layout system.

### 3. UI Components
- **Buttons**: `.btn-primary`, `.btn-secondary`, `.btn-outline`.
- **Cards**: `.card` (includes hover effects).
- **Alerts**: `.alert-success`, `.alert-error`, `.alert-info`.
- **Forms**: `.form-group`, `.label`, `.input`.
- **Badges**: `.badge-primary`.

### 4. Typography Presets
- `.modern`: Default Inter sans-serif.
- `.traditional`: Elegant Serif.
- `.gothic`: Bold Sans-serif.
- `.typescripter`: JetBrains Mono.

### 5. Utility Classes
- **Margins**: `.mt-1`, `.mt-2`, `.mb-1`, `.mb-2`, `.m-0`.
- **Padding**: `.p-0`.
- **Sizing**: `.w-100`.

## Customization
Override the CSS variables to match your brand:
```css
:root {
    --accent-color: #6366f1;
    --radius: 8px;
}
```

## Development Roadmap
- [ ] Modal system (CSS only).
- [ ] Tooltips and Popovers.
- [ ] Navigation dropdowns.
- [ ] Skeleton loading states.

