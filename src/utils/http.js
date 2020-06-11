// import qs from "querystring"
import axios from './axios';

export function getData(url) {
    const result = fetch(url);
    return result;
}

export function postData(url,data) {
    const result = axios({
        method: 'post',
        url: url,
        data: data
    })
    
    // fetch(url, {
    //     method: "post",
    //     headers: {
    //         'Accept': 'application/json, text/plain, */*',
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     body:qs.stringify(data)
    // })
    return result;
}