# 🧱 Grid Layout Components for Tailwind + React

This project provides reusable, responsive grid layout components built using **Tailwind CSS** and **React**. 

---

## 📁 File: `components/GridLayouts.jsx`

### 🔧 Available Components

| Component | Columns | Behavior |
|----------|---------|----------|
| `OneColumn` | 1 | Mobile-first stacked layout |
| `TwoColumnResponsive` | 1 → 2 | Responsive: 1 col on mobile, 2 on tablet+ |
| `ThreeColumnDesktop` | 1 → 3 | 3 columns on desktop, 1 on smaller screens |
| `NestedTwoInThree` | Nested 2/3 | 2-column inside left side of a 3-column grid |
| `AutoFitColumns` | 1 → 4 | Auto expands from 1 to 4 columns based on screen width |

---

## 🌐 Internationalization (i18n)

All placeholder content uses the `t('...')` convention for translation.

### Example i18n JSON:
```json
{
  "contentBlocks": "Content Blocks",
  "subContent": "Sub Content",
  "sideContent": "Side Content",
  "autoFitCards": "Auto Fit Cards"
}
```

Use with `react-i18next`, `next-i18next`, or your preferred i18n tool.

---

## 🚀 How to Use

### 1. Import a layout
```tsx
import { ThreeColumnDesktop } from "@/components/GridLayouts";
```

### 2. Use it in your page/component
```tsx
function Page() {
  return (
    <ThreeColumnDesktop />
  );
}
```

---

## 🛠 Tech Stack
- ⚛️ React 18+
- 🎨 Tailwind CSS 3+
- 🌍 Internationalization ready

---

## 🧩 Customization Tips
- Change `grid-cols-*` classes to suit your layout
- Wrap with parent `section` or `article` for semantics
- Use `gap-*` utilities for spacing control
- Use `children` if you want dynamic slot injection

---

## 📄 License
MIT License — free to use and modify.

---

Happy Building! 🏗️
