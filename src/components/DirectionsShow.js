import { useContext } from "react";
import MealContext from "../context/meal";

function DirectionsShow(){
    const { directions, name } = useContext(MealContext);
    return (
        <div>
        <h4>{name}</h4>
        <p>{directions}</p>
        </div>
    )
};

export default DirectionsShow;