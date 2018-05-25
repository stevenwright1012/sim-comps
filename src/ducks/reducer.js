import axios from 'axios';

const initailState = {
    doggies: [],
    wishlist: []
}

const GET_DOGGIES = "GET_DOGGIES";
const GET_WISHLIST ="GET_WISHLIST";
const UPDATE_DOGGIES = "UPDATE_DOGGIES";
const UPDATE_WISHLIST = "UPDATE WISHLIST";

export default function reducer(state = initailState, action){
    switch (action.type) {
        case GET_DOGGIES + "_FULFILLED":
            return Object.assign({}, state, {doggies: action.payload})
        case GET_WISHLIST + "_FULFILLED":
            return Object.assign({}, state, {wishlist: action.payload})
        case UPDATE_DOGGIES:
            return Object.assign({}, state, {doggies: action.payload})  
        case UPDATE_WISHLIST:
            console.log(action.payload);
            
            return Object.assign({}, state, {wishlist: action.payload})      
        default:
            return state;
    }
}

export function getDoggies(){
    let dogs = axios.get("/api/dogs").then(res => {
        // console.log(res.data);
        
        return res.data
    })
    return {
        type: GET_DOGGIES,
        payload: dogs
    }
}
export function getWishlist(){
    let wishes = axios.get("/api/wishlist").then(res => {
        // console.log(res.data);
        
        return res.data
    })
    return {
        type: GET_WISHLIST,
        payload: wishes
    }
}

export function updateDoggies(dog){
    // console.log(dog);
    
    return {
        type: UPDATE_DOGGIES,
        payload: dog
    }
}
export function updateWishlist(list){
    console.log(list);
    
    return{
        type: UPDATE_WISHLIST,
        payload: list
    }
}