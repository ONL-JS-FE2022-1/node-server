const User = require('../models/User');

module.exports.createUser = (req, res) => {
    const {body} = req;
    const user = new User(body);
    user.addUser();
    delete user.password;
    res.status(201).send(user);
}

module.exports.getAllUsers = (req, res) => {
    const users = User.findAll();
    res.send(users);
}

module.exports.getOneUser = (req, res) => {
    const {userId} = req.params;
    const user = User.findOne(Number(userId));
    res.send(user);
}

module.exports.deleteOneUser = (req, res) => {
    const {userId} = req.params;
    const user = User.findOne(Number(userId));
    if(user) {
        user.deleteUser();
        res.status(200).end();
    } else {
        res.status(404).end();
    }
}

module.exports.updateUser = (req, res) => {
    /* Оновлення юзера
    1. Знайти юзера за його айдішником, отримати екземпляр юзера
    2. Зробити новий об'єкт на основі старих даних + нових даних
    3. ВСатновити в мапу ЗАМІСТЬ старого об'єкта новий
    */

    const {body, params: {userId}} = req;
    const user = User.findOne(Number(userId));
    user.updateUser(body);
    res.send();
}