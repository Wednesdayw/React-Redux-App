import React from 'react';
import axios from 'axios';

//Action types
export const FETCH_FILMS_START = 'FETCH_FILMS_START'; 
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS'; 
export const FETCH_FILMS_FAILURE = 'FETCH_FILMS_FAILURE'; 

//Action Creators
export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_FILMS_START }); 
        axios
            .get('https://ghibliapi.herokuapp.com/films')
            .then(res => {
                console.log(res); 
                dispatch({ type: FETCH_FILMS_SUCCESS , payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_FILMS_FAILURE, payload: err.response }); 
            })
    }
}

/* Notes // STATE MACHINE --> What will the states be when requesting/awaiting/retrieving data

// FETCH_FACTS -> FETCH_FACTS_SUCCESS -> FETCH_FACTS_ERROR
// Define Action Types
// build our action creator
// send request
// handle our states for us
*/