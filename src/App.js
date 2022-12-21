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