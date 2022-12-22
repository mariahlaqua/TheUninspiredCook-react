
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
        <div className="max-w-lg content-center mx-auto cols-2 gap-2">
            <img src={TUCLogo} alt="The Uninspired Cook Logo" className="grid-break-after-column my-2"/>
            <Button onClick={handleClick} />
            <IngredientsList />
            <DirectionsShow />
            <ImageShow />
            

        </div>
    );
}

export default App;