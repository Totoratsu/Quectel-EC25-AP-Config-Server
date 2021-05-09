#!/bin/sh

echo "UPDATING SYSTEM"
sudo apt update && sudo apt upgrade -y

echo "INSTALLING DEPENDENCIES"
sudo apt-get install -y raspberrypi-kernel-headers

sudo chmod +x ./src/scripts/qmi_install.sh
sudo chmod +x ./src/scripts/qmi_auto_connect.sh

echo "EXECUTING qmi_install.sh"
sudo ./src/scripts/qmi_install.sh

echo "DONE"