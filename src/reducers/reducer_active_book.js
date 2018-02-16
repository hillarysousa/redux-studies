// O state abaixo não representa o state da aplicação, e sim apenas o state pelo qual esse reducer é responsável
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
        return action.payload;
    }
    return state
}