const Aluno = require('../models/userModel');

const repository = {
  getAll: async () => {
    return await Aluno.findAll();
  },
  getUserById: async(id) =>{
    return await Aluno.findByPk(id);
  },
  postNewUser: async (req) => {
    return await Aluno.create(req);
  },
  putUser: async(req, id) =>{
    const update = await Aluno.update({...req, ...{updateAt: new Date()}}, {where: {id: id}});
    return !!update[0];
  },
  deleteUser: async(id) =>{
    return !!await Aluno.destroy({where: {id: id}});
  }
}

module.exports = repository;