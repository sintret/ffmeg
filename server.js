var child = require('child_process');
var events = require('events');
var spawn = child.spawn;


var url ='https://keeplive.online/streamIn/';
var uid = "andy";

console.log('Starting FFMPEG')
var ffmpegString = '-i '+url+''
ffmpegString += ' -f mpegts -c:v mpeg1video -an '+url+uid;
ffmpegString += ' -f mpegts -c:v mpeg1video -an '+url+uid+'2';

if(ffmpegString.indexOf('rtsp://')>-1){
    ffmpegString='-rtsp_transport tcp '+ffmpegString
}
console.log('Executing : ffmpeg '+ffmpegString)
var ffmpeg = spawn('ffmpeg',ffmpegString.split(' '));
ffmpeg.on('close', function (buffer) {
    console.log('ffmpeg died')
})

console.log("run at "+url+uid)