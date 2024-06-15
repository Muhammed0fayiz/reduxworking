// Importing Redux library
const redux = require('redux');
// Destructuring the createStore method from Redux
const createStore = redux.createStore;

// Action type constant
const CAKE_ORDERED = 'CAKE_ORDERED';

// Action creator function for ordering a cake
function orderCake() {
    return {
        type: CAKE_ORDERED,  // Action type
        quantity: 1          // Additional payload (not used in this example)
    };
}

// Initial state of the application
const initialState = {
    numberOfCakes: 10,    // Number of cakes available
    anotherProperty: 0    // Additional state property (not used in this example)
}

// Reducer function to handle state changes based on actions
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:  // Handling the CAKE_ORDERED action
            return {
                ...state,  // Copying the existing state
                numberOfCakes: state.numberOfCakes - 1  // Decreasing the number of cakes by 1
            };
        default:  // Returning the unchanged state for unknown action types
            return state;
    }
}

// Creating the Redux store with the reducer
const store = createStore(reducer);

// Logging the initial state of the store
console.log('Initial state', store.getState());

// Subscribing to state changes, logging the updated state to the console
const unsubscribe = store.subscribe(() => {
    console.log('Updated state', store.getState());
});

// Dispatching actions to order cakes
store.dispatch(orderCake()); // Decrease cakes by 1
store.dispatch(orderCake()); // Decrease cakes by 1
store.dispatch(orderCake()); // Decrease cakes by 1

// Unsubscribing from the store updates
unsubscribe();
