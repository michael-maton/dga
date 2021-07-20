import { EDIT_LIST, EDIT_PATTERN } from "../actions/shots";
import optionData from "../../assets/optionData";
import optionData2 from "../../assets/optionData2";
const initialState = {
    shotList: optionData,
    pattern: "22222222222222222222222222222222222222222"
}

const shotsReducer = (state = initialState, action) => {
    switch(action.type) {
        case EDIT_LIST:
                return {
                    ...state,
                    shotList: action.payload,
                };
        case EDIT_PATTERN:
                return {
                    ...state,
                    pattern: action.payload,
                };
        default:
            return state;
    }
}

export default shotsReducer;