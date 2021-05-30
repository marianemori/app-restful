const userRepository = require('../repositories/userRepository');

const controller = {

  getAll: async (req, res) => {
    try {
      const users = await userRepository.getAll();
      res.json(users);
    } catch (e) {
      console.log(e);
      res.status(400).json({msg: "error", details: e});
    }
  },

  getUserById: async(req, res) =>{
    try {
      const { id } = req.params;
      const user = await userRepository.getUserById(id);
      res.json(user);
    } catch (e) { 
      console.log(e);
      res.status(400).json({msg: "error", details: e});
    }
  },

  postNewUser: async (req, res) => {
    try {
      console.log('reqBody', req.body);
      const user = await userRepository.postNewUser(req.body);

      if (!user) {
        throw new Error('O Usuário não foi inserido');
      }
      res.json(user);
      
    } catch (e) {
      console.log(e);
      res.status(400).json({msg: "error", details: e});
    }
  },

  putUser: async (req, res) => {
    try {
      const { id } = req.params;
      const hasUser = await userRepository.getUserById(id);

      const userHasUpdate = await userRepository.putUser(req.body, id);

      if (!userHasUpdate) {
        throw new Error('Não foi possível atualizar o usuário');
      }

      res.json({msg: "Usuário atualizado:" + id});
    } catch (e) {
      console.log(e);
      res.status(400).json({msg: "error", details: e});
    }
  },
    
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(req.params)
      const user = await userRepository.deleteUser(id);
      res.json({msg: "Usuário deletado:" + id});
    } catch (e) {
      console.log(e);
      res.status(400).json({msg: "error", details: e});
    }
  }
}

module.exports = controller;