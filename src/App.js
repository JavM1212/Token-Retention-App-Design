import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import "./App.css";
import ImportTokens from "./pages/ImportTokens/ImportTokens";
import AddRetention from "./components/AddRetention/AddRetention";

function App() {
    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/addRetention" element={<AddRetention />} />
                    <Route path="/importTokens" element={<ImportTokens />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
