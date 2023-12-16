import React from 'react';

const UserProfile = () => {
  // Fetch user information or use dummy data
  const user = { name: 'John Doe', email: 'johndoe@example.com', /* ...other user data */ };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        {/* User settings, order history, etc. */}
      </div>
    </div>
  );
};

export default UserProfile;
