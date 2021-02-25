const dataInicial = [];

const climaReducer = (state = dataInicial, action) => {
    switch (action.type) {
        case 'BUSCAR':            
            return [...state, action.data];
        default:
            return state;
    }
}

export default climaReducer;