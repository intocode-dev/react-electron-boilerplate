# React Electron Boilerplate

[![dependencies status](https://david-dm.org/intocode-io/react-electron-boilerplate/status.svg)](https://david-dm.org/intocode-io/react-electron-boilerplate) [![devDependencies status](https://david-dm.org/intocode-io/react-electron-boilerplate/dev-status.svg)](https://david-dm.org/intocode-io/react-electron-boilerplate?type=dev) [![Version](https://img.shields.io/npm/v/@intocode-io/react-electron-boilerplate.svg)](https://npmjs.com/package/@intocode-io/react-electron-boilerplate) ![NPM](https://img.shields.io/npm/l/@intocode-io/react-electron-boilerplate) [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/micksatana?locale.x=en_GB)

## Summary

This boilerplate is for desktop application development using web frameworks and libraries including React, Electron, Parcel. The boilerplate provides quality control with Jest, Enzyme for testing, and ESLint for linting.

## How to use the boilerplate

### Setup new project

1. Clone the project

   ```bash
   git clone https://github.com/intocode-io/react-electron-boilerplate.git`
   ```

2. Change directory name and the following properties in package.json to your new project.

   ```json
   {
     "name": "your-new-project",
     "version": "1.0.0",
     "description": "What about the project",
     "repository": {
       "type": "git",
       "url": "git+https://github.com/your-username/your-project.git"
     },
     "keywords": ["electron", "react", "what about"],
     "author": "Name Surname",
     "license": "MIT",
     "bugs": {
       "url": "https://github.com/your-username/your-project/issues"
     },
     "homepage": "https://your-home-page"
   }
   ```

   Note: **DO NOT** delete the rest of properties in the package.json.

3. Install dependencies

   ```bash
   npm i
   ```

### Start development

```bash
npm run dev
```

### Build production

```bash
npm run build
```

## LICENSE

MIT License

Copyright (c) 2020 intocode Co., Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
