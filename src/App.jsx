import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root login={login} setLogin={setLogin} />}>
        <Route index element={<Home />} />
        <Route path="/createpost" element={<CreatePost login={login} />} />
        <Route path="/login" element={<Login setLogin={setLogin} />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
