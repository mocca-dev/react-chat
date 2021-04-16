import "./App.css";

import { useAuthState } from "react-firebase-hooks/auth";

import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import ChatRoom from "./components/ChatRoom";

import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">
        <h2>React Chat</h2>
        <SignOut auth={auth} />
      </header>
      <section>{user ? <ChatRoom /> : <SignIn auth={auth} />}</section>
    </div>
  );
}

export default App;
