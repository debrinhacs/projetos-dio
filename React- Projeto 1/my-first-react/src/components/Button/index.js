const Button = (props) => {
    return (
        <button type="button" 
            className={props.className}
            onClick={props.onClick}
        >
            {props.texto}
        </button> 
    )
}

export default Button;