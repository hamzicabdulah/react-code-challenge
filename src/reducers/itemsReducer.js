import { ADD_ITEM } from '../actions/actionTypes';
import initialState from '../data/code-challenge.json';

export default function itemsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            const nextIndex = state.list.length + 1;
            return {
                list: [...state.list, nextIndex],
                details: {
                    ...state.details,
                    [nextIndex]: action.item
                }
            }

        default:
            return state;
    }
}