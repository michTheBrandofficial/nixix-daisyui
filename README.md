<div align="center">

**daisyUI components built with NixixJS, Typescript and TailwindCSS**

</div>

![card-3](https://user-images.githubusercontent.com/64439681/181566540-b1e37814-c72a-48af-bbe2-80367b000770.png)

# nixix-daisyui 🌼

[![NPM Version](https://img.shields.io/npm/v/react-daisyui.svg?branch=master)](https://www.npmjs.com/package/react-daisyui) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-daisyui)](https://bundlephobia.com/result?p=react-daisyui) [![npm](https://img.shields.io/npm/dt/react-daisyui?label=installs)](https://www.npmjs.com/package/react-daisyui) [![License](https://img.shields.io/npm/l/react-daisyui.svg)](https://github.com/daisyui/react-daisyui/blob/master/LICENSE) [![Discord Invite](https://img.shields.io/discord/951593480625459340?color=%237289DA&label=chat&logo=discord&logoColor=white)](https://discord.gg/4v2eS3VQNv)

---

## 💿 Install

Make sure you've installed <a href="https://tailwindcss.com/docs/installation">TailwindCSS</a> and <a href="https://daisyui.com/docs/install/">daisyUI</a>.

Install the package with npm or yarn:

```bash
npm install nixix-daisyui
```

To prevent TailwindCSS from purging your styles, add the following line to your tailwind.config.js:

```js
module.exports = {
  content: [
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/nixix-daisyui/**/*.{js,ts,tsx,jsx}',
  ],
  plugins: [require('daisyui')],
}
```

## ⚡ Quick Start

Import nixix-daisyui components within your component files:

```js
import { Button } from 'nixix-daisyui'

export default (props) => {
  return <Button color="primary">Click me!</Button>
}
```

## 🎨 Themes

To apply a theme (or multiple themes) to a page or components, import the Theme component and wrap your content:

```js
import { Theme, Button } from 'nixix-daisyui'

export default (props) => {
  return (
    <>
      <Theme dataTheme="dark">
        <Button color="primary">Click me, dark!</Button>
      </Theme>

      <Theme dataTheme="light">
        <Button color="primary">Click me, light!</Button>
      </Theme>
    </>
  )
}
```

Use tools like the official <a href="https://daisyui.com/theme-generator/">daisyUI Theme Generator</a> or <a href="https://themes.ionevolve.com/">daisyUI Theme Builder</a> to easily create your own themes.

---
## 🤝 Contributing

We're looking for contributors to help write stories and unit tests for components.

---

### License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/michTheBrandofficial/nixix-daisyui/LICENSE) file for details.