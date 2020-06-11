import React from "react"
import { Link } from "react-router-dom"
import "./style.less"
import { from } from "array-flatten";

export default class Item extends React.Component {
    render() {
        var item = this.props.data;
        return (
            <div className="list-item">
                <Link to={`/details/${item.id}`}>
                    <img src="https://pic1.ajkimg.com/display/xinfang/b5eb33738d058a7eae3100ff4bd03e26/840x563.jpg" alt="" />
                    <div className="mask">
                        <div className="left">
                            <p>{item.title}</p>
                            <p>{item.houseType}</p>
                        </div>
                        <div className="right">
                            <div className="btn">
                                {item.rentType}
                            </div>
                            {/* dangerouslySetInnerHTML:识别标签结构 */}
                            <p dangerouslySetInnerHTML={{ __html: item.price+"/月" }} />
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}