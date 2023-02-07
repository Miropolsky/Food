import { Meal } from './Meal';

export function MealsList({ meals }) {
    return (
        <div className='list'>
            {meals.map((el) => (
                <Meal key={el.idMeal} {...el} />
            ))}
        </div>
    );
}
