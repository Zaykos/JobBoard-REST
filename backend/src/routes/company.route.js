const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company.controller');
const auth = require('../middleware/companyAuth.middleware');
const Role = require('../utils/peopleRole.utils');
const handler = require('../middleware/handle.middleware');



router.get('/company/', auth(Role.Company),handler(companyController.getAllCompanies)); 
router.get('/company/:id', auth(Role.Company) ,handler(companyController.getCompanyById)); 
router.get('/company/email/:email', auth(Role.Company) , handler(companyController.getCompanyByEmail)); 
router.get('/company/whoami', auth(Role.Company), handler(companyController.getCurrentCompany));

router.post('/company/register' ,handler(companyController.createCompany)); 
router.patch('/company/:id', auth(Role.User) ,handler(companyController.updateCompany)); 
router.delete('/company/:id', auth(Role.User) ,handler(companyController.deleteCompany)); 


router.post('/company/login',handler(companyController.companyLogin)); 

module.exports = router;