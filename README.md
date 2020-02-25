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

endpoint para ciudades de españa
https://public.opendatasoft.com/explore/dataset/espana-municipios/api/?location=5,36.12825,-6.91667&basemap=jawg.streets&dataChart=eyJxdWVyaWVzIjpbeyJjb25maWciOnsiZGF0YXNldCI6ImVzcGFuYS1tdW5pY2lwaW9zIiwib3B0aW9ucyI6e319LCJjaGFydHMiOlt7ImFsaWduTW9udGgiOnRydWUsInR5cGUiOiJjb2x1bW4iLCJmdW5jIjoiQVZHIiwieUF4aXMiOiJpZF8wIiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoiI0ZGNTE1QSJ9XSwieEF4aXMiOiJjb21tdW5pZGFkX2F1dG9ub21hIiwibWF4cG9pbnRzIjo1MCwic29ydCI6IiJ9XSwidGltZXNjYWxlIjoiIiwiZGlzcGxheUxlZ2VuZCI6dHJ1ZSwiYWxpZ25Nb250aCI6dHJ1ZX0%3D

deploy chrome store
https://www.akinjide.me/2019/automate-chrome-extension-deployment/

rest client online
https://restninja.io


dependencies: 
- npm install chrome-storage
- npm install mock-local-storage --save-dev
- npm install window-mock --save-dev

