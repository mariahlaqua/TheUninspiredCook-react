import { useContext } from "react";
import MealContext from "../context/meal";

function ImageShow() {
    const { image } = useContext(MealContext);
    return (
        <div>
            <img src={image} alt="The finished recipe"/>
        </div>
    );
}

export default ImageShow