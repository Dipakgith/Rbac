// src/components/PermissionsEditor.js

import React from 'react';

const PermissionsEditor = ({ permissions, onPermissionChange }) => {
  return (
    <div>
      <h3>Permissions</h3>
      <ul>
        {permissions.map((permission, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={permission.checked}
              onChange={() => onPermissionChange(index)}
            />
            {permission.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionsEditor;
