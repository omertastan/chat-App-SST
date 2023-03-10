import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import ChatPage from "./components/ChatPage";
import io from "socket.io-client"
import { ProtectedRoute } from "./components/ProtectedRoute";

const socket = io(
  'https://botty.alexgurr.com',
  { transports: ['websocket', 'polling', 'flashsocket'] }
);
socket.on("connect", () => { console.log('connected') })
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/chatPage" element={<ChatPage socket={socket} />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;