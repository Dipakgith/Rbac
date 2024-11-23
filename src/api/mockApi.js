// src/api/mockApi.js

const users = [
    { id: 1, name: "John Doe", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", role: "User", status: "Inactive" }
  ];
  
  const roles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "User", permissions: ["Read"] }
  ];
  
  // Simulate API delay
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
  export const getUsers = async () => {
    await delay(500);
    return users;
  };
  
  export const getRoles = async () => {
    await delay(500);
    return roles;
  };
  
  export const addUser = async (user) => {
    await delay(500);
    users.push(user);
    return user;
  };
  
  export const updateUser = async (user) => {
    await delay(500);
    const index = users.findIndex((u) => u.id === user.id);
    users[index] = user;
    return user;
  };
  
  export const deleteUser = async (id) => {
    await delay(500);
    const index = users.findIndex((user) => user.id === id);
    users.splice(index, 1);
    return id;
  };
  
  export const addRole = async (role) => {
    await delay(500);
    roles.push(role);
    return role;
  };
  
  export const updateRole = async (role) => {
    await delay(500);
    const index = roles.findIndex((r) => r.id === role.id);
    roles[index] = role;
    return role;
  };
  