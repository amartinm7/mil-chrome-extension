#  Chrome-ext mil-ads companion

![Chrome-ext](./_images/title.png "Chrome ext with Vue")

### ` Chrome-ext mil-extension`
Simple example to create a chrome extension: https://www.sitepoint.com/build-vue-chrome-extension/

Open chrome and browse to the `chrome://extensions/` url.  
From here enable the developer mode toggle and upload the dist folder.
And this moment you can play with the extension open new tabs.

We are using vue-web-extension as vue template/module for the vue-cli command.
https://github.com/Kocal/vue-web-extension

to develop:
```npm
npm run watch:dev
```

to build a version to dev in the dist folder
````npm
npm run build
````

to build a version to prod in the dist-zip folder
````npm
npm run build-zip
````

kill the process
`````bash
lsof -i :9090
sudo kill -9 pid
`````

open chrome-extensions
`````bash
chrome://extensions/
`````

https://github.com/Kocal/vue-web-extension

https://alligator.io/vuejs/css-frameworks-vuejs/

https://medium.com/@simoneldevig_80359/building-chrome-extensions-with-vue-js-cafaefb82bd4

https://www.chromium.org/developers/design-documents/extensions/proposed-changes/apis-under-development/proposal-chrome-extensions-cookies-api

https://getuikit.com/docs/introduction

https://semantic-ui.com/introduction/getting-started.html

deploy chrome store
https://www.akinjide.me/2019/automate-chrome-extension-deployment/
