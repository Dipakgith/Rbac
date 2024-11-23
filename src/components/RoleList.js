// src/components/RoleList.js

import React, { useState, useEffect } from 'react';
import { getRoles, addRole, updateRole } from '../api/mockApi';
import { Card, CardContent, Typography, Button, Grid, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const RoleList = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState({ name: '', permissions: [] });

  useEffect(() => {
    const fetchRoles = async () => {
      const data = await getRoles();
      setRoles(data);
    };

    fetchRoles();
  }, []);

  const handleAddRole = async () => {
    await addRole(newRole);
    setRoles([...roles, { ...newRole, id: roles.length + 1 }]);
    setNewRole({ name: '', permissions: [] });
  };

  const handleUpdateRole = async (role) => {
    await updateRole(role);
    setRoles(roles.map(r => r.id === role.id ? role : r));
  };

  return (
    <Card sx={{ marginBottom: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Manage Roles
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Role</TableCell>
                <TableCell>Permissions</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {roles.map(role => (
                <TableRow key={role.id}>
                  <TableCell>{role.name}</TableCell>
                  <TableCell>{role.permissions.join(', ')}</TableCell>
                  <TableCell>
                    <Button variant="outlined" onClick={() => handleUpdateRole({ ...role, permissions: [...role.permissions, 'New Permission'] })} color="primary">
                      Add Permission
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
              label="Enter role name"
              variant="outlined"
              value={newRole.name}
              onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
            />
          </Grid>
          <Grid item xs={4}>
            <Button fullWidth variant="contained" color="primary" onClick={handleAddRole}>
              Add Role
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RoleList;
