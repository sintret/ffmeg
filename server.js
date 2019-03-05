var child = require('child_process');
var events = require('events');
var spawn = child.spawn;
var cmd=require('node-cmd');


var unique = {
    anggrek10: {
        port1: 8081,
        port2: 8082,
        url: "8081/anggrek10"
    },
    mawar90: {
        port1: 8083,
        port2: 8084,
        url: "8083/mawar90"
    },
    keyboard8: {
        port1: 8085,
        port2: 8086,
        url: "8085/keyboard8"
    },
    kranair: {
        port1: 8087,
        port2: 8088,
        url: "8087/kranair"
    },
    selangair: {
        port1: 8089,
        port2: 8090,
        url: "8089/selangair"
    },
    tehmanis: {
        port1: 8091,
        port2: 8092,
        url: "8091/tehmanis"
    },
    kopi: {
        port1: 8093,
        port2: 8094,
        url: "8093/kopi"
    },
    samsu: {
        port1: 8095,
        port2: 8096,
        url: "8095/samsu"
    },
    komporgas: {
        port1: 8097,
        port2: 8098,
        url: "8097/komporgas"
    },
    kipasangin: {
        port1: 8099,
        port2: 8100,
        url: "8099/kipasangin"
    },
    kantong: {
        port1: 8101,
        port2: 8102,
        url: "8101/kantong"
    }
}

var command = "sudo modprobe bcm2835-v4l2";
cmd.run(command);
console.log(command)

var command2 = "ffmpeg -f v4l2 -framerate 25 -video_size 640x480 -i /dev/video0 -f mpegts -codec:v mpeg1video -s 640x480 -b:v 1000k -bf 0 http://68.183.236.92:" +unique.anggrek10.url;
cmd.run(command2);
console.log(command2)