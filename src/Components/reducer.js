export const initialState = {
    signature:[
        {xsign:null, timestamp:null, xnonce:null}
    ]
};

function reducer(state, action){
    switch(action.type){
        case 'GET_SIGN':
            // logic for getting sign
            return {state}
        default:
            return state;
    }
}

export default reducer;