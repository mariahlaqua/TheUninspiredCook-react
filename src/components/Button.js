function Button({ onClick }){
    const handleClick = (event) => {
        event.preventDefault();
        onClick();
    }
    
    return (
        <button onClick={handleClick}>Random Recipe</button>
    );
}

export default Button;

