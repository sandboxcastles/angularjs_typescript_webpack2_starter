# Basic Webpack 2 Typescript compilation

To use, clone or download this repostitory, then:

```
npm install
```

For development code:
```
npm run build
```

For production code:
```
npm run prod
```

For development purposes, I have included html-webpack-plugin, which uses a template index.html, injects the script src into the template, then copies the injected index.html to the dist folder. Using this, you can check your typescript in a browser by using:
```
npm run dev
```