cd /home/t2elzeth/kgua/kgua_front || exit

git pull origin master

docker-compose up --build -d
