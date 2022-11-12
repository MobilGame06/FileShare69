echo -ne '>                       [1%]\r'
sleep 2
sudo apt update -y
echo -ne '>>>>>                   [30%]\r'
sleep 2
sudo apt install git -y
echo -ne '>>>>>>>>>>>>            [50%]\r'
sleep 2
sudo apt install nodejs npm -y
echo -ne '>>>>>>>>>>>>>>>>>>>>>>   [70%]\r'
sleep 2
sudo npm install pm2 -g
echo -ne '>>>>>>>>>>>>>>>>>>>>>>>>  [90%]\r'
sleep 2
git clone https://github.com/MobilGame06/FileShare69.git
cd FileShare69
npm install
echo -ne '>>>>>>>>>>>>>>>>>>>>>>>>>>[100%]\r'
sleep 5
clear
echo 'https://github.com/MobilGame06/FileShare69/blob/main/README.md'