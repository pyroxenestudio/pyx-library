# Pyx utils

helpers, properties, hooks, styles, etc, for pyroxene

# Requirements
## if css is used
- tailwindcss

## if reactjs is used
- reactjs

# how to install
1. npm install
2. npm run dev (it stars the vite server and load index.html)

# How to try for production
1. npm run build
2. npm link
3. move to the project where you want to use it (you can stay in the same project)
4. npm link pyx
4. Repeat this everytime you change some file and want to try it as production

# Styles
There are two ways to load the styles
## Like tailwindcss, and not only css (Recommended)
This means that you need something to compile the tailwindcss and your customs css, @utility, @apply, etc before you can use it,
with vite, is just to add the plugin in the vite.config.ts like

```ts
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```
**To import it in the js**
```js
import 'pyx/pyx.css';
```

That point to the file /css/pyx.css

## As css
In the dist directory there is a pyx.css file, this file is the compile of tailwindcss that depends on what class did you use in the files, including try.build.tsx and try.dev.tsx
**To import it in the js**
```js
import 'pyx/style.css';
```
