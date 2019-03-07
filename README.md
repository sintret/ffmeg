Video Streaming via Web Socket in Raspberry
==============

### Andhie Fitria  (myjurnal.online)

### Usage

```
$ sudo su
$ apt-get update
$ apt-get install ffmpeg
* install nodejs, open your search engine and find your self
$ npm install -g pm2
* install git
* git clone ....
* masuk ke direktory ffmeg
$ npm install
$ pm2 start server.js --name ffmeg
$ pm2 save
$ pm2 startup arch
```

 setelah install nodejs kemudian install pm2 di global

 perintahnya



 after that buka browser


 http://myjurnal.online/play/anggrek10


 untuk test ffmpeg
 sudo modprobe bcm2835-v4l2
 ffmpeg -f v4l2 -framerate 25 -video_size 640x480 -i /dev/video0 -f mpegts -codec:v mpeg1video -s 640x480 -b:v 1000k -bf 0 http://68.183.236.92:8081/anggrek10


