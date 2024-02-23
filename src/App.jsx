import GlobalStyle from "./constants/GlobalStyle";
import { UserProvider } from "./context/UserContext";
import Login from "./pages/Login";
import User from "./pages/User";

function App() {
  return (
    <main>
      <GlobalStyle />
      {/* <Login></Login> */}
      <UserProvider>
        <User />
      </UserProvider>
    </main>
  );
}

export default App;
