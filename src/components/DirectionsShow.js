import { useContext } from "react";
import MealContext from "../context/meal";

function DirectionsShow(){
    const { directions } = useContext(MealContext);
    return (
        <div>
        <p>{directions}</p>
        </div>
    )
};

export default DirectionsShow;