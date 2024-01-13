import Home from "./Home";
import About from './About';
import { Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { useReducer } from "react";

function Main() {
    const navigation = useNavigate();
    const seededRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function (date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const initialState = fetchAPI(new Date());
    const updateTimes = (state, date) => {
        return fetchAPI(new Date(date));
        // return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    }
    const submit = (formData) => {
        console.log(formData);
        navigation("/confirmed")
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initialState)
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/reserve" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submit={submit}></BookingPage>}></Route>
                <Route path="/confirmed" element={<ConfirmedBooking></ConfirmedBooking>}></Route>
            </Routes>
        </main>
    )
}
export default Main;