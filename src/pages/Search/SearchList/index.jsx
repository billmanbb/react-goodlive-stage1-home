import React from "react"
import api from "../../../api"
import SearchListView from "./SearchListView"
import LoadMore from "../../../components/LoadMore"


export default class SearchList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchData:[],
            hasMore:false,
            page:0
        }
    }

    componentDidMount(){
        //获取城市
        //获取搜索内容
        const city = this.props.city;
        const content = this.props.content;
        api.search.searchData(city,content)
        .then(res => {
            this.setState({
                searchData:res.data,
                hasMore:res.data[res.data.length-1].hasMore,
                page:this.state.page +1
            })
        })
    }

    componentWillUpdate(prevProps,prevState){
        //再次做网络请求就可以了
        const city = this.props.city;
        const content = this.props.content;
        if(prevProps.content === content){
            return
        }
        api.search.searchData(city,content,0)
            .then(res => {
                this.setState({
                    searchData:res.data,
                    hasMore:res.data[res.data.length-1].hasMore
                })
            })
    }

    componentWillUnmount(){
        window.onscroll = null;
        //清除
        this.setState = (state,callback) => {
            return;
        }
    }


    loadMoreHandler = () => {
        const city = this.props.city;
        const content = this.props.content;
        api.search.searchData(city,content,this.state.page)
            .then(res => {
                this.setState({
                    searchData : this.state.searchData.concat(res.data),
                    hasMore:res.data[res.data.length-1].hasMore,
                    page:this.state.page+1
                })
            })
    }


    render(){

        return(
            <div>
                {
                    this.state.searchData ? 
                    <SearchListView data={this.state.searchData}/>
                    : <div>数据正在加载...</div>
                }
                {
                    this.state.hasMore ?
                    <LoadMore onLoadMore={ this.loadMoreHandler }/>
                    : <div>被你看光了</div>
                }
            </div>
        )
    }
}
