const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators=redux.bindActionCreators

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOKED = 'CAKE_RESTOKED';

function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}

function restokeCake(qty = 1) {
    return {
        type: CAKE_RESTOKED,
        quantity: qty
    }
}

const initialState = {
    numberOfCakes: 10,
    anotherProperty: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        case CAKE_RESTOKED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.quantity
            }
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Updated state', store.getState());
});

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restokeCake(3));
// store.dispatch(restokeCake());
const actions =bindActionCreators({orderCake,restokeCake},store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restokeCake()
unsubscribe();
