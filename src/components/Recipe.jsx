import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { geatMealById } from '../api';
import Preloader from './Preloader';

export function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        geatMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);
    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className='recipe'>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1>{recipe.strMeal}</h1>
                    <h6>Category: {recipe.category}</h6>
                    {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                    <p>{recipe.strInstructions}</p>
                    {recipe.strYoutube ? (
                        <div className='row'>
                            <h5>Video Recipe</h5>
                            <iframe
                                title={id}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                    -11
                                )}`}
                                allowFullScreen
                            />
                        </div>
                    ) : null}
                </div>
            )}
            <button className='btn' onClick={() => navigate(-1)}>
                Go back
            </button>
        </>
    );
}
