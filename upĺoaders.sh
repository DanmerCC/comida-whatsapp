#validate if has $1 param
if [ -z "$1" ]
  then
    echo "No especifica el numero de whatsapp"
    exit 1
fi
#load env variables
envcontent=$(cat .env)
echo "${envcontent/VITE_WHATSAPP_NUMBER=5195574511/VITE_WHATSAPP_NUMBER=$1}" > .env
npm run build
cp src/assets/favicon.ico dist
ssh awsportafolio <<EOF
sudo rm -rf /var/www/comida/*
exit
EOF
scp -r dist awsportafolio:/home/ubuntu/comida
ssh awsportafolio <<EOF
sudo rm -rf /var/www/comida/*
sudo cp -r /home/ubuntu/comida/dist/* /var/www/comida
EOF

##clear cloudflare

##POST https://api.cloudflare.com/client/v4/zones/53733ea97015bfef988d1667f88df905/purge_cache

curl -X POST "https://api.cloudflare.com/client/v4/zones/53733ea97015bfef988d1667f88df905/purge_cache" \
     -H "X-Auth-Email:danmerccoscco@gmail.com" \
        -H "X-Auth-Key: 5c0aebceae211bb3ea9246c3ceb5eae349868

