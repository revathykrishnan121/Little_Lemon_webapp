import BookingForm from "./BookingForm";

function BookingPage(props) {
    return (
        <section className="reserve-table-container">
            <h2>Book Your Table Now!</h2>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submit={props.submit}></BookingForm>
        </section>
    )
}
export default BookingPage;