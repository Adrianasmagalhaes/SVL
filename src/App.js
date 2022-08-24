import "./App.css";
import { FormBook } from "./Components/FormBook";
import { NavBar } from "./Components/NavBar";
import BookTable from "./Components/BokTable";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />

      <div className="container">
        {/* <FormBook />
        <BookTable/> */}
        <Routes>
          <Route path="/form" element={<FormBook />} />
          <Route path="/table" element={<BookTable />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
