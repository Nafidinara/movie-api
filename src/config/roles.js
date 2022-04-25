const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers','manageWoods','getWoods'],
  superadmin: ['getUsers', 'manageUsers','manageAdmins','manageWoods','getWoods'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
