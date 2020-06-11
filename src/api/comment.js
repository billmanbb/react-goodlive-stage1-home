// 评论接口

import base from "./base"
import { postData } from "../utils/http"


const comment = {
    commentData(id){
        return postData(base.baseUrl+base.comment,{id:id})
    }

}

export default comment;