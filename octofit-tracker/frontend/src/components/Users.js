import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const items = data.results || data;
        setUsers(items);
        console.log('Fetched users:', items);
        console.log('Endpoint used:', endpoint);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, [endpoint]);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Users</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-light">
              <tr>
                {users[0] && Object.keys(users[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user.id || idx}>
                  {users[0] && Object.keys(users[0]).map((key) => (
                    <td key={key}>{String(user[key])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
