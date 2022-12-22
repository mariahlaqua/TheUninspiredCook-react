import { useContext } from 'react';
import MealContext from '../context/meal';
import IngredientsShow from "./IngredientsShow";
import MeasurementShow from "./MeasurementShow";


function IngredientsList(){
    const { ingredients, measurements } = useContext(MealContext);
    
    const renderedIngredients = ingredients.map((ingredient, index) => {
        return <IngredientsShow key={index} ingredient={ingredient} />
    });
    const renderedMeasurements = measurements.map((measurement, index) => {
        return <MeasurementShow key={index * 10} measurement={measurement} className="break-after-column"/>
    });
    return (
        <div className="columns-2">
            {renderedMeasurements}
            {renderedIngredients}
            
        </div>
    )
}

export default IngredientsList;