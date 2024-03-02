import MealItem from "./meal-item";
import styledClasses from "./meals-grid.module.css";

const MealsGrid = ({ meals }) => {
  return (
    <ul className={styledClasses.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
