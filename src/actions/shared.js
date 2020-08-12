import { getInitialData} from "../utils/api";
import {receiveUsers} from "./users";
import {receiveTweets} from "./tweets";
import {setAuthedUser} from "./authedUser";

const AUTHED_ID = 'sarah_edo'

export function handleIntialData () {
    return(dispatch) => {
        return getInitialData()
            .then(({users,tweets}) => {
                dispatch(receiveTweets(tweets))
                dispatch(receiveUsers(users))
                dispatch(getInitialData(AUTHED_ID))
                }
            )
    }
}