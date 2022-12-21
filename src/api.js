import axios from 'axios';

const randomMealDb = async () => {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
    let ingredientArray = [];
    let measurementArray = [];
        Object.entries(response.data.meals[0]).forEach(([key, value]) =>
            key.includes('strIngredient') && value ? ingredientArray.push(value) :null);
        Object.entries(response.data.meals[0]).forEach(([key, value]) =>
            key.includes('strMeasure') && value ? measurementArray.push(value) :null);
        
    
    return ;

}

export default randomMealDb;