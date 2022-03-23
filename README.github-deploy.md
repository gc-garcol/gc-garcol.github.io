# [Deploy react application on github pages](https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/)

## Config

### Install github-page dependency
```
npm install gh-pages --save-dev
```

### Add homepage attribute to package.json
```
{
  "name": "my-blog",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://gc-garcol.github.io"
}  
```

### Add deploy scripts  to package.json
```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

## Deploy
```
rm -rf node_modules/.cache/gh-pages
```

```
npm run deploy
```