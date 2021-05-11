const { exec, cd, echo, chmod } = require("shelljs");

class Controllers {
    // Views
    index(req, res) {
        res.render('index');
    }

    // Functions
    install(req, res) {
        cd('src/scripts');

        echo("UPDATING SYSTEM");
        exec('sudo apt update -y && sudo apt upgrade -y');

        echo("INSTALLING DEPENDENCIES");
        exec("sudo apt-get install -y raspberrypi-kernel-headers");

        chmod("+x", "qmi_install.sh");
        chmod("+x", "qmi_auto_connect.sh");

        echo("EXECUTING qmi_install.sh");
        exec('sudo ./qmi_install.sh', function (code, stdout, stderr) {
            console.log('Exit code:', code);
            console.log('Program output:', stdout);
            console.log('Program stderr:', stderr);

            echo("DONE");
            res.send('<h1>OK</h1>');
        });
    }

    simple_qmi(req, res) {
        const { apn } = req.body;
        const command = `sudo ./quectel-CM.sh -s ${apn}`;

        cd("/home/pi/files/quectel-CM");
        exec(command, function (code, stdout, stderr) {
            console.log('Exit code:', code);
            console.log('Program output:', stdout);
            console.log('Program stderr:', stderr);

            echo("DONE");
            res.send('<h1>OK</h1>');
        });
    }

    auto_qmi(req, res) {
        const { apn } = req.body;
        const command = `sudo ./qmi_auto_connect.sh ${apn}`;

        cd('src/scripts');
        exec(command, function (code, stdout, stderr) {
            console.log('Exit code:', code);
            console.log('Program output:', stdout);
            console.log('Program stderr:', stderr);

            echo("DONE");
            res.send('<h1>OK</h1>');
        });
    }
}

const controllers = new Controllers();
module.exports = controllers;