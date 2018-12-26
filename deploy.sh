#!/bin/bash
cd ~/modesens-frontend

echo '##########START##########'
echo
echo '1. git pull origin master...'
git pull origin master

echo
echo
echo '#########################'
echo
echo "2. npm run build..."
# clear
cd modesens
rm -rf .nuxt/*
npm run build

echo
echo
echo '#########################'
echo
echo "3. sync files to s3 ..."
aws s3 sync .nuxt/client s3://modesens/static/dist --cache-control max-age=315360000
aws s3 sync .nuxt s3://modesens/nuxt

# echo
# echo
# echo '#########################'
# echo
# echo "4. update machines..."
# python ~/modesens-web/ladystyle/manage.py machines


echo
echo
echo '#########################'
echo
echo "5. deploy to product machines..."
echo
ansible-playbook web.yml

echo '###########END###########'


