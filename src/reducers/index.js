import { combineReducers } from "redux"
import city from "./city"
import collect from "./collect"
import userinfo from "./userinfo"

const rootReducers = combineReducers({
    city,
    collect,
    userinfo
})

export default rootReducers