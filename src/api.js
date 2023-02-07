import { API_URL } from './config';

const geatMealById = async (mealId) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
    return await response.json();
};

const geatAllCategory = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
};

const geatFilteredCategory = async (catName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + catName);
    return await response.json();
};

export { geatMealById, geatAllCategory, geatFilteredCategory };
