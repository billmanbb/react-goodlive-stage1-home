import React from "react"
import ReactSwipe from 'react-swipe';
import Pagination from "./Pagination"
import "./style.less"

// const styles = {
//   slide: {
//     padding: 15,
//     minHeight: 100,
//     color: '#fff',
//   },
//   slide1: {
//     background: '#FEA900',
//   },
//   slide2: {
//     background: '#B3DC4A',
//   },
//   slide3: {
//     background: '#6AC0FF',
//   },
// };



export default class Swiper extends React.Component{

  constructor(props){
    super(props);
    this.state={
      currentIndex: 0,
      banners: this.props.banners,
        playinglist:[]
    }
}


    render(){
      let opt = {
        auto: 2000,
        callback: function(index) {
          this.setState({currentIndex: Number(index)})
          // console.log(this.state.currentIndex)
        }.bind(this)
      }

        return(
                <div>
                    <ReactSwipe className="carousel" swipeOptions={opt} key={this.state.banners.length}>
                    {
                      this.state.banners.map((element,index)=>
                         <div key={index}>
                              <img src={element} style={{width:'100%'}} />
                              <Pagination index={this.state.currentIndex } dots={this.state.banners.length} />
                         </div>
                      )
                    }
                  </ReactSwipe>
              </div>
        )
    }
}