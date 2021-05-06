#!/bin/sh

echo UPDATING SYSTEM
sudo apt update && sudo apt upgrade -y

echo INSTALLING DEPENDENCIES
sudo apt-get install raspberrypi-kernel-headers

sudo chmod +x qmi_install.sh
sudo chmod +x qmi_auto_connect.sh

echo EXECUTING qmi_install.sh
sudo ./qmi_install.sh

echo DONE