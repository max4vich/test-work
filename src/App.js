import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./containers/ProductList/ProductList";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
