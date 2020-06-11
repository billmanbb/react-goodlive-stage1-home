// 搜索接口

import base from "./base"
import { postData } from "../utils/http"


const search = {
    searchData(city,content,page){
        return postData(base.baseUrl+base.search,{city:city,content:content,page:page})
    }

}

export default search;