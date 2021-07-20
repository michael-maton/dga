import { EDIT_LIST } from "../actions/shots";
import optionData from "../../assets/optionData";
import PatternCreator from "../../Screens/ShotSelectorGame/helpers/PatternCreator";

const initialState = {
  shotList: optionData,
  discPattern: PatternCreator(optionData.discType),
  shotPattern: PatternCreator(optionData.shotType),
};

const shotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_LIST:
      return {
        ...state,
        shotList: action.payload,
        discPattern: PatternCreator(action.payload.discType),
        shotPattern: PatternCreator(action.payload.shotType),
      };

    default:
      return state;
  }
};

export default shotsReducer;
