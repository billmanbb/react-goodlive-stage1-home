import React from "react"
import "./style.less"

export default class HomeHotView extends React.Component{

    render(){
        const data = this.props.data;
        const title = this.props.title;
        return(
            <div className="hotproduct">
            <h3>{ title }</h3>
                <div className="hot-container">
                    <ul className="clear-fix">
                        {
                            data.map((element,index) => {
                                return(
                                    <li key={ element.id}>
                                        <img href="http://image14.m1905.cn/uploadfile/2013/0517/thumb_1_300_410_20130517030817379.jpg" alt={ element.title }></img>
                                        <span>{ element.title }</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}