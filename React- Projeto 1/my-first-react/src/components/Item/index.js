const Item = (props) => {
    return (
        <a href="#" className={props.className}>
          {props.texto}
        </a>
    )
}

export default Item;