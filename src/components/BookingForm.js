import { useState } from "react";

function BookingForm(props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guestNumber, setGuestNumber] = useState(0);
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date, time, guestNumber, occasion)
        props.submit({ date, time, guestNumber, occasion })
    }

    const changeDate = (e) => {
        setDate(e.target.value);
        props.dispatch(e.target.value);
    }

    const getIsFormValid = () => {
        let isValid = true;
        if (date === '' || time === '' || guestNumber < 1 || occasion ==='') {
            isValid = false;
        }
        return isValid;
    };

    return (<>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div className="field">
                    <label htmlFor="res-date">Choose Date</label>
                    <input type="date" id="res-date" value={date} onChange={changeDate} required></input>
                </div>
                <div className="field">
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" value={time} onChange={e => setTime(e.target.value)} required>
                        <option value="">Select</option>
                        {props.availableTimes && props.availableTimes.map(time => (
                            <option>{time}</option>
                        ))}
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guestNumber} onChange={e => setGuestNumber(e.target.value)}></input>
                </div>
                <div className="field">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} required>
                        <option value="">Select</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div>
                    <button type="submit" value="Make Your reservation" className="button-style" disabled={!getIsFormValid()}>Make Your reservation</button>
                </div>
            </fieldset>
        </form>
    </>)
}
export default BookingForm;