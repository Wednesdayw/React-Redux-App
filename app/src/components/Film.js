import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';



function Film(props) {
    console.log(props); 
    const MyButton = styled(Button)({
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 20px',
      });
    return (
  
        <Card>
            <CardActionArea>
        
            <h3>{props.film.title}</h3>
       
            <p>{props.film.description}</p>
            <p>Director: {props.film.director}</p>
            <p>Producer: {props.film.producer}</p>
            <p>Release Date: {props.film.release_date}</p>
            <MyButton>Save Movie</MyButton>
            </CardActionArea> 
        </Card>
           
    )
}

export default Film; 