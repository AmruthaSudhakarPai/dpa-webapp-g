import { Action, AnyAction } from "redux";
import { RootState } from "../store";

interface Home {
  id: number,
  title: string,
  dateStart: string,
  dateEnd: string
}

interface HomeState {
  byIds: Record<Home['id'], Home>,
  allIds: Home['id'][],

}

const GET_RECORDS_BY_ID = 'GET_RECORDS_BY_ID';
const GET_ALL_ID = 'GET_ALL_ID';

type GetRecordByIdAction = Action<typeof GET_RECORDS_BY_ID>;
type GetAllIdAction = Action<typeof GET_ALL_ID>;

export const getRecordById = (): GetRecordByIdAction => ({
  type: GET_RECORDS_BY_ID
});

export const getAllId = (): GetAllIdAction => ({
  type: GET_ALL_ID
});

export const selectHomeState = (rootState: RootState) => rootState.home;

export const selectByIds = (rootState: RootState) => selectHomeState(rootState).byIds;

const initialState: HomeState = {
  byIds: [],
  allIds: []
}
const homeReducer = (state: HomeState = initialState, action: GetRecordByIdAction | GetAllIdAction): HomeState => {
  switch (action.type) {
    case GET_RECORDS_BY_ID:
      return { ...state, byIds: [1, 2] }
    case GET_ALL_ID:
      return { ...state, allIds: [1, 2] }
    default:
      return state;
  }
}
export default homeReducer;