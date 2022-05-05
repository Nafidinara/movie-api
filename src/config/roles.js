const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers','manageMovies','getMovies'],
  superadmin: ['getUsers', 'manageUsers','manageAdmins','manageMovies','getMovies'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
