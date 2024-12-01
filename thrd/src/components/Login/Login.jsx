// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = ({ users, setCurrentUser }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     const user = users.find(
//       (u) => u.username === username && u.password === password
//     );

//     if (user) {
//       setCurrentUser(user);
//       navigate("/shopping");
//     } else {
//       setError("Invalid username or password.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-96 p-6 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
//           Login
//         </h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           onClick={handleLogin}
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//         >
//           Login
//         </button>
//         {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default Login;





















import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../../../data/users.csv'; // Import mock data

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/shopping');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
