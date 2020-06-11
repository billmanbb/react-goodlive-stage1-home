// 首页热门和推荐接口

import base from "./base"
import { postData } from "../utils/http"


const homehot = {
    homehot1Data(city){
        return postData(base.baseUrl+base.homehot1,{city:city})
    },
    homehot2Data(city){
        return postData(base.baseUrl+base.homehot2,{city:city})
    }


}

export default homehot;