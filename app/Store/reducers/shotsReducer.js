import { EDIT_LIST, EDIT_PATTERN } from "../actions/shots";
import optionData from "../../assets/optionData";
import PatternCreator from "../../Screens/ShotSelectorGame/helpers/PatternCreator";
import optionData2 from "../../assets/optionData2";
const initialState = {
    shotList: optionData,
    discPattern: PatternCreator(optionData.discType),
    shotPattern: PatternCreator(optionData.shotType)
}

const shotsReducer = (state = initialState, action) => {
    switch(action.type) {
        case EDIT_LIST:
            return {
                ...state,
                shotList: action.payload,
                discPattern: PatternCreator(action.payload.discType),
                shotPattern: PatternCreator(action.payload.shotType),
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