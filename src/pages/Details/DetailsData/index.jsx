import React from "react"
import api from "../../../api"
import DetailsDataView from "./DetailsDataView"


export default class DetailsData extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            datas:{},
            comments:[]
        }
    }

    componentDidMount(){

        //列表数据
        const id = this.props.id;
        api.details.detailsData(id)
        .then(res => {
            this.setState({
                datas:res.data
            })
        })

        //评论数据
        api.comment.commentData(id)
        .then(res => {
            console.log(res.data)
            this.setState({
                comments:res.data
            })
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.datas.imgs && this.state.comments ?
                    <DetailsDataView id={ this.props.id } history={this.props.history} data={this.state.datas} comments={ this.state.comments }/>
                    : <div>数据请求中</div>
                }
            </div>
        )
    }
}