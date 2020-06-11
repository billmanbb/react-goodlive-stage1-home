// 搜索接口

import base from "./base"
import { postData } from "../utils/http"


const order = {
    orderData(user){
        return postData(base.baseUrl+base.order,{user:user})
    }

}

export default order;