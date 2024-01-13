import restauranfood from "../assets/restauranfood.jpg"
import greekSalad from "../assets/greekSalad.jpg"
import bruchetta from "../assets/bruchetta.svg"
import lemonDessert from "../assets/lemonDessert.jpg"
import FoodCard from "./FoodCard";

function Home() {
    const reserveTable = () => {

    }
    return (
        <>
            <section class="banner">
                <article>
                    <div>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button type="button" className="button-style" onClick={reserveTable} aria-label="On Click">Reserve a Table</button>
                    </div>
                    <picture>
                        <img src={restauranfood} alt="restauranfood" width="250" height="280"></img>
                    </picture>
                </article>
            </section>
            <section className="sectionHeading">
                <h2>This Week Specials!</h2>
                <button type="button" className="button-style">Online Menu</button>
            </section>
            <section className="sectionContent">
                <FoodCard imageName={greekSalad} dishName="Greek Salad" rate="$12.99" details="The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese garnished with crunchy garlic and rosemary croutons"></FoodCard>
                <FoodCard imageName={bruchetta} dishName="Bruchetta" rate="$5.99" details="Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil"></FoodCard>
                <FoodCard imageName={lemonDessert} dishName="Lemon Dessert" rate="$5.00" details="This comes straight from granmas receipe book, every last ingredient has been sourced and is an authentic as can be imagined "></FoodCard>
            </section>
        </>
    )
}
export default Home;