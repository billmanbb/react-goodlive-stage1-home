// 搜索接口

import base from "./base"
import { postData } from "../utils/http"


const ordercomment = {
    ordercommentData(info){
        return postData(base.baseUrl+base.ordercomment,info)
    }

}

export default ordercomment;