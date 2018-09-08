import { TEST_ACTION } from './actionTypes';

export function testAction (test) {
    return { type: TEST_ACTION, test }
}