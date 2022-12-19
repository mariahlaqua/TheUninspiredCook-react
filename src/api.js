import axios from 'axios';

const randomMealDb = async () => {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
    return response.data.meals;

}

export default randomMealDb;