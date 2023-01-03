import { useContext } from "react";
import MealContext from "../context/meal";

function RecipeName() {
    const { name } = useContext(MealContext);

    return (
    <h4 className="text-xl">{name}</h4>
    );
}

export default RecipeName;