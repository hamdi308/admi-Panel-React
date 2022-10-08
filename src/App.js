import Home from "./Pages/Home/Home";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/NewPage/New";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single/>} />
          <Route path="new" element={<New/>} />
        </Route>
         <Route path="products">
          <Route index element={<List />} />
          <Route path=":productId" element={<Single/>} />
          <Route path="new" element={<New/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
