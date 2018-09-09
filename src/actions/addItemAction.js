import { ADD_ITEM } from './actionTypes';

export function addItem (item) {
    return { type: ADD_ITEM, item }
}