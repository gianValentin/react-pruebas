const dataInicial = [];

const todo = (state = dataInicial, action) => {
    switch (action.type) {
        case 'AGREGAR':
            return [...state, action.data]
        case 'BORRAR':
            return state.filter(item => item.id !== action.id)
        case 'EDITAR':
            return state.filter(item => {
                if(item.id !== action.data.id){
                    item = action.data
                }
            })
        default:
            return state;
    }
}

export default todo;