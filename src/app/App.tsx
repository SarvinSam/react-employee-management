import {
 createBrowserRouter, RouterProvider
} from 'react-router-dom';


import Login from '../pages/login/login';
import Dashboard from '../pages/dashboard/dashboard';
import Users from '../pages/users/users';
import CreateUser from '../pages/createUser/createUser';

import { UserProvider } from '../context/User.Context';
import EditUser from '../pages/editUser/editUser';
function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    }
  ])

  return (
    <RouterProvider router={router} />
    // <UserProvider>
    //   <Router>
    //     <Routes>
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/dashboard" element={<Dashboard />} />
    //       <Route path="/users" element={<Users />} />
    //       <Route path="/createuser" element={<CreateUser />} />
    //       <Route path="/edituser/:id" element={<EditUser />} />

    //     </Routes>
    //   </Router>
    //   {/* {token ? null : <Login />} */}
    // </UserProvider>

  );
}

export default App;
