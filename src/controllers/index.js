const { exec, cd } = require("shelljs");

class Controllers {
    // Views
    index(req, res) {
        res.render('index');
    }

    // Functions
    install(req, res) {
        cd('src/scripts');
        
        exec('sudo chmod +x ./init.sh');
        exec('sudo ./init.sh', function (code, stdout, stderr) {
            console.log('Exit code:', code);
            console.log('Program output:', stdout);
            console.log('Program stderr:', stderr);

            res.send('<h1>OK</h1>');
        });
    }

    simple_qmi(req, res) {
        const { apn } = req.body;
        const command = `sudo files/quectel-CM/quectel-CM.sh -s ${apn}`;

        exec(command, function (code, stdout, stderr) {
            console.log('Exit code:', code);
            console.log('Program output:', stdout);
            console.log('Program stderr:', stderr);

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

            res.send('<h1>OK</h1>');
        });
    }
}

const controllers = new Controllers();
module.exports = controllers;