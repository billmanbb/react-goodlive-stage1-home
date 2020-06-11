import React from "react"
import Header from "../../components/Header"
import CurrentCity from "./CurrentCity"
import HotCity from "./HotCity"
import { connect } from "react-redux"
import * as cityActions from "../../actions/city"
import { bindActionCreators } from "redux"

class City extends React.Component{

    onCityNameHandler = (cityName) => {
        this.props.cityActions.updateCity({
            cityName:cityName
        })
        //返回到上一个页面
        window.history.go(-1);

        //用户修改城市，需要存储
        localStorage.setItem("city",cityName);
    }

    render(){
        return(
            <div>
                <Header title="城市选择" />
                <CurrentCity city={this.props.city.cityName} />
                <HotCity cityNameHandler={ this.onCityNameHandler } />
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        city:state.city
    }
}

function mapDispatchToProps(dispatch){
    return{
        cityActions:bindActionCreators(cityActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)