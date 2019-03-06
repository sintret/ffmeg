pm2 startup arch
pm2 start server.js
pm2 save

chmod +x /home/ffmeg/wakeup.sh


crontab -e
@reboot  /home/ffmeg/test.sh