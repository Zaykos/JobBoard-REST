const express = require('express');
const router = express.Router();
const peopleController = require('../controllers/people.controller');
const auth = require('../middleware/peopleAuth.middleware');
const Role = require('../utils/peopleRole.utils');
const handler = require('../middleware/handle.middleware');

const { createUserSchema, updateUserSchema, validateLogin } = require('../middleware/validators/userValidator.middleware');


// createUserSchema, updateUserSchema for the validation 
// auth() validate the token -- auth(Role.Company) validate the token and the role


router.get('/people/', auth(Role.User), handler(peopleController.getAllUsers)); 
router.get('/people/:id' ,auth(Role.User), handler(peopleController.getUserById)); 
router.get('/name/:name', auth(Role.User), handler(peopleController.getUserByuserName)); 
router.get('/user/whoami', auth(Role.User), handler(peopleController.getCurrentUser)); 

router.post('/people/register', handler(peopleController.createUser)); 
router.patch('/people/:id', auth(Role.User), peopleController.updateUser); 
router.delete('/people/:id', auth(Role.User), handler(peopleController.deleteUser)); 


router.post('/people/login'/* , auth(Role.Company) */, handler(peopleController.userLogin)); 

module.exports = router;