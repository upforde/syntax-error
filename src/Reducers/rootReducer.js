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
    console.log(action)
    if(action.type === "ADD_USED"){
        switch(action.to){
            case 'audience':
                break;
            case 'crew':
                break;
            case 'sologame':
                break;
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
                break;
        }
    }
    else if(action.type === "REMOVE_USED"){
        switch(action.to){
            case 'audience':
                break;
            case 'crew':
                break;
            case 'sologame':
                break;
            case 'multiple':
                let newMultiple = state.multiple.filter(multiple => {
                    return action.id !== multiple
                });
                return{
                    ...state,
                    multiple: newMultiple
                }
            case 'music':
                let newMusic = state.music.filter(music => {
                    return action.id !== music
                });
                return{
                    ...state,
                    music: newMusic
                }
            case 'quiz':
                let newQuiz = state.quiz.filter(quiz => {
                    return action.id !== quiz
                });
                return{
                    ...state,
                    quiz: newQuiz
                }
            case 'screenshot':
                let newScreenshot = state.screenshot.filter(screenshot => {
                    return action.id !== screenshot
                });
                return{
                    ...state,
                    screenshot: newScreenshot
                }
            case 'silhouette':
                let newSilhouette = state.silhouette.filter(silhouette => {
                    return action.id !== silhouette
                });
                return{
                    ...state,
                    silhouette: newSilhouette
                }
            default:
                break;
        }
    }
    return state;
}

export default rootReducer;