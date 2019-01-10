
# Install

## nginx & uwsgi
[Setting up Django and your web server with uWSGI and nginx](https://uwsgi-docs.readthedocs.io/en/latest/tutorials/Django_and_nginx.html) <br>
[How to use Django with uWSGI](https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/uwsgi/)

## node, vue, nuxt, pm2
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

启动(4个进程):
pm2  start server.json -i 4  

查看实时日志：
pm2 logs ModeSens

停止：
pm2 stop all

调试的时候可以直接这样前台起：(先stop调后台进程)
npm start
```


## nginx modify
[nginx config us](../nginx/modesens_us.conf)<br>
[nginx config cn](../nginx/modesens_cn.conf)<br>

```
upstream uwsgi {
  ip_hash;
  server 127.0.0.1:9000;
}

upstream nuxt {
  ip_hash;
  server 127.0.0.1:3000;
}

    location / {
        include uwsgi_params;
        uwsgi_pass uwsgi;
    }
    location /vue {
        proxy_pass http://nuxt;
        proxy_set_header Host $http_host;
        proxy_set_header X-Forwarded-Host $host;
    }   

```


## nuxt
[nuxt github](https://github.com/nuxt/nuxt.js) <br>
```
vue init nuxt-community/starter-template <project-name>
npm install
```

## 开机启动脚本

[init.sh](../init.sh)

```
cd /modesens/modesens-frontend/modesens
rm -rf .nuxt/*
npm install
aws s3 sync s3://modesens/nuxt .nuxt
export PM2_HOME='/root/.pm2'
pm2 startOrReload server.json
```

## 部署
[deploy](../deploy.sh)<br>
[ansible](../frontend.yml)<br>

