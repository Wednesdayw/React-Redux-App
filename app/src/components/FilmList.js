import React from 'react';
import Film from './Film'; 
import Loader from 'react-loader-spinner'; 
import { connect } from 'react-redux'; 
import { getData } from '../actions/index'; 
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
  

function FilmList(props) {
    const MyButton = styled(Button)({
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      });
    return (
        <div>
            <h1>Unofficial Studio Ghibli Film List</h1>
            <MyButton variant="contained" onClick={props.getData}>
                {props.isLoading ? (
                    <Loader type="TailSpin" color="#00BFFF" height="15" width="100" />
                ) : (
                    'Get List of Films'
                )}
            </MyButton>
            {props.films && props.films.map(film => <Film key={film.id} film={film} />)}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        isLoading: state.isLoading,
        films: state.films
    }
}


export default connect(mapStateToProps, 
    { getData })(FilmList); 