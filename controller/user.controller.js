const status = require('http-status');
const {
  findAll,
  findById,
  editUser,
  deleteUser,
} = require('../service/user.service');

module.exports = {
  getUsers: async (req, res) => {
    const results = await findAll().catch((err) => {
      return res.status(status.INTERNAL_SERVER_ERROR).json({ message: err });
    });
    return res.status(status.OK).json({ data: results });
  },

  getUser: async (req, res) => {
    const userId = req.params.id;
    const result = await findById(userId).catch((err) => {
      return res.status(status.INTERNAL_SERVER_ERROR).json({ message: err });
    });
    return res.status(status.OK).json({ data: result });
  },

  editUser: async (req, res) => {
    const user = req.body.user;
    const result = await editUser(user).catch((err) => {
      return res.status(status.INTERNAL_SERVER_ERROR).json({ message: err });
    });
    return res.status(status.OK).json({ data: result });
  },

  deleteUser: async (req, res) => {
    const userId = req.params.id;
    const result = await deleteUser(userId).catch((err) => {
      return res.status(status.INTERNAL_SERVER_ERROR).json({ message: err });
    });
    return res.status(status.OK).json({ message: result });
  },
};
