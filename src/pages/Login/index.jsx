import React from "react"
import LoginView from "./LoginView"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as UserInfoActions from "../../actions/userinfo"

class Login extends React.Component{

    loginHandler(user){
        this.props.userInfoActions.loginUser({
            name:user
        })
        //返回上一个页面
        window.history.back(-1);
    }

    render(){
        return(
            <div>
                <LoginView onLoginHandler={ this.loginHandler.bind(this) }/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return{
        userInfoActions:bindActionCreators(UserInfoActions,dispatch)
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(Login)