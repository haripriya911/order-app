import classes from "./MealsSummary.module.css";
const MealsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered to you</h2>
      <p>
        Choose Your Favorite Meals From Our Broad Selection Of available meals
        and enjoy a Delicious Lunch or Dinner at Home.{" "}
      </p>
      <p>
        All our meals are cooked with high-quality ingredients,just-in-time and
        of course by experience chefs.{" "}
      </p>
    </section>
  );
};
export default MealsSummary;
