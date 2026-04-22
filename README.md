# P1 Primary Shared Library

Shared Puck editor components for distributed use.

## 🚀 Quick Start

### Install
```bash
npm install
```

### Development
```bash
npm run storybook
```

Opens Storybook at `http://localhost:6006` to preview components.

## 📦 Components

- **TestBlock** - Test component with warning background

## 🔗 Usage in Main Project

### 1. Add as git submodule:
```bash
git submodule add https://github.com/rolandbenedetti73/puck-shared-library.git lib/puck/test-submodule
```

### 2. Configure Tailwind

Add the preset to your `tailwind.config.js`:
```javascript
module.exports = {
  presets: [
    require('./lib/puck/test-submodule/tailwind.preset'),
  ],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/puck/test-submodule/components/**/*.tsx',
  ],
  // ... rest of your config
};
```

### 3. Import CSS variables (optional)

Add to your global CSS:
```css
@import '../lib/puck/test-submodule/styles/variables.css';
```

### 4. Import in your registry:
```typescript
import { TestBlock } from "./test-submodule/components/test";
```

## 🎨 Customization

Override CSS variables in your global styles:
```css
:root {
  --p1-primary: #8b5cf6;      /* Change primary color to purple */
  --p1-spacing-md: 1.5rem;    /* Increase default spacing */
}
```

## 📚 Documentation

Live Storybook: `https://rolandbenedetti73.github.io/p1-shared-library` (coming soon)

## 🧪 Testing

```bash
npm test
```

## 📝 Adding Components

1. Create component in `components/`
2. Create story file: `stories/your-component.stories.tsx`
3. Component appears in Storybook automatically
