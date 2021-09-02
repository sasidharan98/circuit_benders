import {
    SAVE_MESSAGE,
} from '../constants/messageConstants';

export function saveMessage(dataToSubmit) {
   
    return {
        type: SAVE_MESSAGE,
        payload: dataToSubmit
    }
}
