import React from "react"

export default class LoadMore extends React.Component{

    constructor(){
        super();
        this.load = React.createRef();
    }

    /**
     * 监听页面滚动事件
     */
    componentDidMount(){
        const _this = this;
        let timer = null;
        //获取页面高度
        const winHeight = document.documentElement.clientHeight;
        window.onscroll = function(event){
            //getBoundingClientRect:对象
            if(timer){
                clearTimeout(timer);
            }
            timer = setTimeout(function(){
                if(_this.load.current.getBoundingClientRect().top < winHeight){
                    _this.props.onLoadMore()
                }
            },100)
            
        }
    }

    render(){
        return(
            <div ref={ this.load }>
                LoadMore
            </div>
        )
    }
}