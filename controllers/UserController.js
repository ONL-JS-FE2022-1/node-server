const User = require('../models/User');

module.exports.createUser = (req, res) => {
    const {body} = req;
    const user = new User(body);
    user.addUser();
    delete user.password;
    res.status(201).send(user);
}