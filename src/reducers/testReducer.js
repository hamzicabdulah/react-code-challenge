import { TEST_ACTION } from '../actions/actionTypes';

export default function testReducer(state = [], action) {
    switch (action.type) {
        case TEST_ACTION:
            return state;

        default:
            return state;
    }
}