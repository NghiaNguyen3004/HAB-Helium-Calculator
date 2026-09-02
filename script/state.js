export const state ={
    balloon_size : null,
    payload_weights : null,
    positive_lift : null,

    result:{
        required_helium : null,
        avg_burst_alt : null,
        avg_ascent_rate : null,
        ascent_time : null
    },

    errors:{
        balloon_size : null,
        payload_weights : null,
        positive_lift : null
    }

}

export function setState(patch){
    //TODO : Implement to set the state in here
    const { result, errors, ...flatPatch } = patch;
 
    if (result) {
        state.result = { ...state.result, ...result };
    }
 
    if (errors) {
        state.errors = { ...state.errors, ...errors };
    }
    
    Object.assign(state, flatPatch);
}