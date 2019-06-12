# modesens

## Install

### nginx & uwsgi
[Setting up Django and your web server with uWSGI and nginx](https://uwsgi-docs.readthedocs.io/en/latest/tutorials/Django_and_nginx.html) <br>
[How to use Django with uWSGI](https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/uwsgi/)

### node, vue, nuxt, pm2
```
curl --silent --location https://rpm.nodesource.com/setup_10.x | sudo bash -
sudo yum -y install nodejs
npm install -g vue-cli
npm install -g pm2
```

[Download | nodejs](https://nodejs.org/en/download/)

## build & start
```
cd /modesens/modesens-frontend/modesens

npm i
npm run build
npm start
```


### nuxt
[nuxt github](https://github.com/nuxt/nuxt.js) <br>
```
vue init nuxt-community/starter-template <project-name>
npm install
```



> ModeSens Frontend Nuxt Project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
