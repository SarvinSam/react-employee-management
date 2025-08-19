import {
 createBrowserRouter, RouterProvider
} from 'react-router-dom';


import Login from '../pages/login/login';
import Dashboard from '../pages/dashboard/dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
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
