import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { geatFilteredCategory } from '../api';
import { MealsList } from '../components/MealsList';
import Preloader from '../components/Preloader';

export function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        geatFilteredCategory(name).then((res) => setMeals(res.meals));
    }, [name]);
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate(-1)} className='btn'>
                Go back
            </button>
            {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
        </>
    );
}
