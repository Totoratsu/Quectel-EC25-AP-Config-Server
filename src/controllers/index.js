const { exec } = require("child_process");

class Controllers {
    // Views
    index(req, res) {
        res.render('index');
    }

    // Functions
    install(req, res) {
        exec('sudo ./src/scripts/init.sh', (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }

            console.log(`stdout: ${stdout}`);
            res.send('<h1>OK</h1>');
        });
    }

    simple_qmi(req, res) {
        const { apn } = req.body;
        const command = `sudo files/quectel-CM/quectel-CM.sh -s ${apn}`;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }

            console.log(`stdout: ${stdout}`);
            res.send('<h1>OK</h1>');
        });
    }

    auto_qmi(req, res) {
        const { apn } = req.body;
        const command = `sudo ./src/scripts/qmi_auto_connect.sh ${apn}`;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }

            console.log(`stdout: ${stdout}`);
            res.send('<h1>OK</h1>');
        });
    }
}

const controllers = new Controllers();
module.exports = controllers;