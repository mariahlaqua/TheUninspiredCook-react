import './IngredientsList.css';
import IngredientsShow from "./IngredientsShow";
import MeasurementShow from "./MeasurementShow";


function IngredientsList({ ingredients, measurements }){
    
    const renderedIngredients = ingredients.map((ingredient, index) => {
        return <IngredientsShow key={index} ingredient={ingredient} />
    });
    const renderedMeasurements = measurements.map((measurement, index) => {
        return <MeasurementShow key={index * 10} measurement={measurement} />
    });
    return (
        <div className="ingredients">
            {renderedIngredients}
            {renderedMeasurements}
        </div>
    )
}

export default IngredientsList;