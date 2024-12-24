import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<div>Base Page</div>}></Route>
          <Route path="/login" element={<div>Login Page</div>}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
      <NavBar />
    </>
  );
}
export default App;
