import './App.css';
import TUCLogo from './images/TUCLogo.png';
import { useState } from 'react';
import ImageShow from './components/ImageShow';
import Button from './components/Button';
import randomMealDb from './api';
import IngredientsList from './components/IngredientsList';

function App() {
    const [ingredients, setIngredients] = useState([]);
    const [measurements, setMeasurements] = useState([]);
    const [image, setImage] = useState('');

    const handleClick = async () => {
        const result = await randomMealDb();
        console.log(result);
        let ingredientArray = [];
        let measurementArray = [];
        Object.entries(result[0]).forEach(([key, value]) =>
            key.includes('strIngredient') && value ? ingredientArray.push(value) :null);
        Object.entries(result[0]).forEach(([key, value]) =>
            key.includes('strMeasure') && value ? measurementArray.push(value) :null);
        setMeasurements(measurementArray);
        setIngredients(ingredientArray);
        setImage(result[0].strMealThumb);
    };

    return (
        <div>
            <img src={TUCLogo} alt="The Uninspired Cook Logo" className="logo"/>
            <Button onClick={handleClick} />
            <ImageShow image={image} />
            <IngredientsList ingredients={ingredients} measurements={measurements}/>

        </div>
    );
}

export default App;