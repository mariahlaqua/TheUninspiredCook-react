import './App.css';
import TUCLogo from './images/TUCLogo.png';
import { useContext, useEffect } from 'react';
import MealContext from './context/meal';
import ImageShow from './components/ImageShow';
import Button from './components/Button';
import IngredientsList from './components/IngredientsList';
import DirectionsShow from './components/DirectionsShow';

function App() {
    const { fetchMeal } = useContext(MealContext);

    useEffect(() =>{
        fetchMeal();
    }, []);


    const handleClick = async () => {
        const result = await fetchMeal();
        console.log(result);
        
    };

    return (
        <div>
            <img src={TUCLogo} alt="The Uninspired Cook Logo" className="logo"/>
            <Button onClick={handleClick} />
            <DirectionsShow />
            <ImageShow />
            <IngredientsList />

        </div>
    );
}

export default App;