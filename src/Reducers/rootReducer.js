const initState = {
    audience: {},
    crew: {},
    sologame: {},
    multiple: [],
    music: [],
    quiz: [],
    screenshot: [],
    silhouette: []
}

const rootReducer = (state = initState, action) => {
    if(action.type === "ADD_USED"){
        switch(action.to){
            case 'audience':
                return{
                    ...state,
                    audience: action.id,
                    crew: action.id
                }
            case 'crew':
                return{
                    ...state,
                    crew: action.id,
                    audience: action.id
                }
            case 'sologame':
                return{
                    ...state,
                    sologame: action.id
                }
            case 'multiple':
                return{
                    ...state,
                    multiple: [...state.multiple, action.id]
                }
            case 'music':
                return{
                    ...state,
                    music: [...state.music, action.id]
                }
            case 'quiz':
                return{
                    ...state,
                    quiz: [...state.quiz, action.id]
                }
            case 'screenshot':
                return{
                    ...state,
                    screenshot: [...state.screenshot, action.id]
                }
            case 'silhouette':
                return{
                    ...state,
                    silhouette: [...state.silhouette, action.id]
                }
            default:
                break
        }
    }
    return state
}

export default rootReducer