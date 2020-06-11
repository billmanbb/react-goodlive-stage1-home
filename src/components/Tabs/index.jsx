import React from "react"
import "./style.less"

export default class Tabs extends React.Component{

    constructor(){
        super();
        this.state = {
            currentIndex:0
        }
    }


    check_title_index(index){
        //0 1
        return index === this.state.currentIndex ? "Tab_title active" : "Tab_title"
    }

    tabHandler (index){
        this.setState({
            currentIndex:index
        })
    }


    check_item_index(index){
        //0 1
        return index === this.state.currentIndex ? "show" : "hide"
    }


    render(){
        return(
            <div>
                <div className="Tab_title_wrap">
                    {
                        React.Children.map(this.props.children,(element,index) => {
                            return (
                                <div  className={this.check_title_index(index)} onClick={this.tabHandler.bind(this,index)}>
                                    {element.props.tabName}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="Tab_item_warp">
                    {
                        React.Children.map(this.props.children,(element,index) => {
                            return (
                                <div className={this.check_item_index(index)}>
                                    {element.props.children}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}