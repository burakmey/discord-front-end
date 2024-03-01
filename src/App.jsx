import GlobalStyle from "./constants/GlobalStyle";
import Login from "./pages/Login";
import User from "./pages/User";
import Home from "./pages/Home";
import { useEffect } from "react";
import { UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <div>
        404 Not Found back to home button <Link to="/">Home</Link>
      </div>
    ),
  },
  { path: "/login", element: <Login /> },
  {
    path: "/user",
    element: (
      <UserProvider>
        <User />
      </UserProvider>
    ),
  },
]);

function App() {
  console.log("App rendered!");

  useEffect(() => {
    return () => console.log("App unmounted!");
  }, []);

  return (
    <AuthProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
