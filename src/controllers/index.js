class Controllers {
    // Views
    index(req, res) {
        res.render('index');
    }

    // Functions
    exec(req, res) {
        res.send('Monda');
    }
}

const controllers = new Controllers();
module.exports = controllers;