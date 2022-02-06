import React from 'react';
import { ListItem, ListItemText,Button } from '@material-ui/core/';
import { useDispatch } from 'react-redux';


function handleClick(linkUrl) {
    if(linkUrl)
        window.location.href = linkUrl;    
  }

const Item = ({ name, details,linkUrl }) => {
    const dispatch = useDispatch();
   

    return(
        
        <ListItem>
            <ListItemText
                primary={name}
                secondary={details}
            />
            
            <Button 
                    variant="outlined"                    
                    onClick={()=>dispatch(handleClick(linkUrl))}
                >
                    Verificar
                </Button>
        </ListItem>
    )
}

export default Item;
