import Home from "./Home";
import About from './About';
import { Routes, Route } from "react-router-dom";
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

function Main() {
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
    const updateTimes = (state, action) => {
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
                <Route path="/" element={<Home availableTimes={availableTimes} dispatch={dispatch} submit={submit}></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/reserve" element={<BookingPage></BookingPage>}></Route>
                <Route path="/confirmed" element={<ConfirmedBooking></ConfirmedBooking>}></Route>
            </Routes>
        </main>
    )
}
export default Main;