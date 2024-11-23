// src/components/UserList.js

import React, { useState, useEffect } from 'react';
import { getUsers, addUser, updateUser, deleteUser } from '../api/mockApi';
import { Card, CardContent, Typography, Button, TextField, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState({ name: '', role: 'User', status: 'Active' });

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    await addUser(newUser);
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ name: '', role: 'User', status: 'Active' });
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  const handleUpdateUser = async (user) => {
    await updateUser(user);
    setUsers(users.map(u => u.id === user.id ? user : u));
  };

  return (
    <Card sx={{ marginBottom: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Manage Users
        </Typography>
        {loading ? <Typography>Loading...</Typography> : (
          <>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map(user => (
                    <TableRow key={user.id}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.status}</TableCell>
                      <TableCell>
                        <Button variant="outlined" onClick={() => handleDeleteUser(user.id)} color="error">
                          Delete
                        </Button>
                        <Button variant="outlined" onClick={() => handleUpdateUser({ ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' })} sx={{ marginLeft: 1 }}>
                          Toggle Status
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Grid container spacing={2} sx={{ marginTop: 2 }}>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  label="Enter name"
                  variant="outlined"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                />
              </Grid>
              <Grid item xs={4}>
                <Button fullWidth variant="contained" color="primary" onClick={handleAddUser}>
                  Add User
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default UserList;
