// 详情接口

import base from "./base"
import { postData } from "../utils/http"


const details = {
    detailsData(id){
        return postData(base.baseUrl+base.details,{id:id})
    }

}

export default details;