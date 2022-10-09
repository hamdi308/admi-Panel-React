import Home from "./Pages/Home/Home";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/NewPage/New";
import { userInputs,productInputs } from "./formSource";
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
          <Route path="new" element={<New inputs={ userInputs} title="Add New User"/>} />
        </Route>
         <Route path="products">
          <Route index element={<List />} />
          <Route path=":productId" element={<Single/>} />
          <Route path="new" element={<New inputs={ productInputs } title="Add New Product"/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
