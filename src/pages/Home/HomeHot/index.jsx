import React from "react"
import api from "../../../api"
import HomeHotView from "./HomeHotView"

export default class HomeHot extends React.Component{

    constructor(){
        super();
        this.state = {
            homehot1:[],
            homehot2:[]
        }
    }

    componentDidMount(){
        //读取city
        const city = this.props.city || localStorage.getItem("city") || "北京";
        api.homehot.homehot1Data(city)
        // .then(res => res.json())
        .then(res => {
            this.setState({
                homehot1:res.data
            })
        })

        api.homehot.homehot2Data(city)
        // .then(res => res.json())
        .then(res => {
            this.setState({
                homehot2:res.data
            })
        })
    }

    render(){
        // const { homehot1,homehot2 } = this.state;
        const homehot1 = this.state.homehot1;
        const homehot2 = this.state.homehot2;
        return(
            <div>
                {
                    homehot1.length > 0?
                    <HomeHotView data={ homehot1 } title={ '热销单品' }/>
                    : <div>正在请求数据</div>
                }

                {
                    homehot2.length > 0?
                    <HomeHotView data={ homehot2 } title={ '家庭常用' }/>
                    : <div>正在请求数据</div>
                }
            </div>
        )
    }
}