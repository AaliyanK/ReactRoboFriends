import { CHANGE_SEARCH_FIELD } from './constants'
export const setSearchField = (text) => ({
    // The action is going to take text, and return object w/ type and payload (data)
    type: CHANGE_SEARCH_FIELD,
    payload: text
})