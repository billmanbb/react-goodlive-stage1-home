import React from "react"
import SearchHeader from "./SearchHeader"
import { connect } from "react-redux"
import SearchList from "./SearchList";


class Search extends React.Component{

    // componentDidMount(){
    //     //获取城市
    //     //获取搜索内容
    //     const city = this.props.city.cityName;
    //     const content = this.props.match.params.content;
    //     api.search.searchData(city,content)
    //     .then(response => console.log(response.data))
    // }


    render(){
        
        const content = this.props.match.params.content
        return(
            <div>
                <SearchHeader history={this.props.history}/>
                <SearchList city={ this.props.city.cityName } content ={content} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        city:state.city
    }
}

export default connect(mapStateToProps)(Search)