import axios from 'axios';

const initailState = {
    doggies: [],
}

const GET_DOGGIES = "GET_DOGGIES"

export default function reducer(state = initailState, action){
    switch (action.type) {
        case GET_DOGGIES + "_FULFILLED":
            return Object.assign({}, state, {doggies: action.payload})
        default:
            return state;
    }
}

export function getDoggies(){
    let dogs = axios.get("/api/dogs").then(res => {
        console.log(res.data);
        
        return res.data
    })
    return {
        type: GET_DOGGIES,
        payload: dogs
    }
}