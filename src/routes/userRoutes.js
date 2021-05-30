const router = require('express').Router();
const userController = require('../controllers/userController');

router.get(
  '/alunos',
  userController.getAll
  );

router.get(
  '/alunos/:id',
  userController.getUserById
);

router.post(
  '/alunos',
  userController.postNewUser
);

router.put(
  '/alunos/:id',
  userController.putUser
);

router.delete(
  '/alunos/:id', 
  userController.deleteUser
);

module.exports = router;