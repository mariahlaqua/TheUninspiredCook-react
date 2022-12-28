import { createContext, useState } from 'react';
import axios from 'axios';

const MealContext = createContext();

function Provider({ children }){
    const [ ingredients, setIngredients ] = useState([]);
    const [ measurements, setMeasurements ] = useState([]);

const fetchMeal = async () => {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
    let mealData = response.data.meals[0];

    let ingredientArray = [];
    let measurementArray = [];
        Object.entries(mealData).forEach(([key, value]) =>
            key.includes('strIngredient') && value ? ingredientArray.push(value) :null);
        Object.entries(mealData).forEach(([key, value]) =>
            key.includes('strMeasure') && value ? measurementArray.push(value) :null);
        
    
    setIngredients(ingredientArray);
    setMeasurements(measurementArray);

};

const mealDataToShare = {
    ingredients,
    measurements,
    fetchMeal,
};

return (
    <MealContext.Provider value={mealDataToShare}>
        {children}
    </MealContext.Provider>
)
}

export { Provider };
export default MealContext;