import { GET_TASK, GET_TASKS, NEW_TASK } from "./types";

export const getTasks = () => (dispatch) => {
    return dispatch({type: GET_TASKS, payload: tasks})
}
