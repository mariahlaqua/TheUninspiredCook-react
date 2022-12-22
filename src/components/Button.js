function Button({ onClick }){
    const handleClick = (event) => {
        event.preventDefault();
        onClick();
    }
    
    return (
        <button className="bg-sky-500 text-white border-slate px-2 py-1.5"onClick={handleClick}>Random Recipe</button>
    );
}

export default Button;

