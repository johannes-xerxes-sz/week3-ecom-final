const express = require('express');
const router = express.Router();
const {
    getUsers,
    deleteUsers,
    createUser,
    deleteUser,
    getUser,
    updateUser,
    login,
    forgotPassword,
    resetPassword,
    logout,
    updatePassword
} = require('../controllers/userController');
const reqLogger = require('../middlewares/reqLogger')
const {
    userValidator,
    adminValidator
} = require('../middlewares/utils/validators')
const protectedRoute = require('../middlewares/auth')
//root

router.route('/')
    .get(reqLogger, adminValidator, getUsers)
    .post(reqLogger, userValidator, createUser)
    .delete(reqLogger, protectedRoute, deleteUsers)

router.route('/login')
    .post(reqLogger, login)

router.route('/forgotpassword')
    .post(reqLogger, forgotPassword)

router.route('/resetpassword')
    .put(reqLogger, resetPassword)

router.route('/updatepassword')
    .put(reqLogger, protectedRoute, updatePassword)

router.route('/logout')
    .get(reqLogger, protectedRoute, logout)

    router.route('/:userId')
    .get(reqLogger, getUser)
    .put(reqLogger, protectedRoute, updateUser)
    .delete(reqLogger, protectedRoute, deleteUser)

    module.exports = router;