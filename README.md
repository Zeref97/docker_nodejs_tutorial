1. Run Dockerfile
```
docker build -f Dockerfile .
```
2. Start docker container and mount Server_mqtt to /opt/src in docker
```
chmod +x Server_mqtt
docker run -it --name server_mqtt -v $PWD/Server_mqtt:/opt/src node:12.18.2 bash
```
3. Install lib for project in container
4. Create new image from a container's changes
```
docker commit server_mqtt server_mqtt:1.0.0
```
5. Save image to a tar archive
```
docker save -o server_mqtt.tar server_mqtt
```
6. Remove container and images
```
docker container ls -a
docker container rm server_mqtt
docker images -a
docker image rm server_mqtt:1.0.0
docker image rm node:12.18.2
docker image rmi <image id> //remove all image dependent node
```
7. Load server_mqtt.tar image and run container
```
chmod +x Server_mqtt
chmod +x install.sh
./install.sh
docker-compose up -d
docker container ls -a
docker exec -it <container id> bash
```
