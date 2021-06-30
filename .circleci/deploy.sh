cd /home/t2elzeth/kgua/front_kgua || exit

git pull origin deploy

docker-compose up --build -d
