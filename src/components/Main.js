import Home from "./Home";
import About from './About';
import { Routes, Route } from "react-router-dom"

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
            </Routes>
        </main>
    )
}
export default Main;