const express = require('express');
const app = express();
const {validateUser} = require('./middlewares/index');
const UserController = require('./controllers/UserController');

const PORT = 5000;

const bodyParser = express.json();

app.post('/user', bodyParser, validateUser, UserController.createUser);
app.get('/user/:userId', UserController.getOneUser);
app.get('/users', UserController.getAllUsers);
app.delete('/user/:userId', UserController.deleteOneUser);
app.put('/user/:userId', bodyParser, UserController.updateUser);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

/*
Зареєструвати юзера

1. Прийняти запит на певний endpoint
2. Розпасрити дані, які прийшли з запитом.
3. Перевірити (валідувати) дані.
4. Зберегти ці дані.
5. Створити сесію юзера.
6. Підготувати дані юзера у відповідь.
7. Надіслати підготовлені дані у відповідь на запит.

*/