import React, { Component } from 'react'

export default class Time extends Component {


    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }


    componentDidMount() {
        this.timerID = setInterval(() => 
            this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }


  render() {
    return (
      <div className='watch'style={{marginLeft: '150px'}} >
        <h1 className='time-control' style={{fontSize: '80px'}}>{this.state.time}</h1>
        <div className='text-time' style={{ display: 'flex', margin: '5px 10px'}}>
        <p style={{ margin: '0 40px' , marginLeft: '0' , fontSize: '25px'}}>чвсов</p>
        <p style={{ margin: '0 40px' , marginLeft: '0' , fontSize: '25px'}}>минут</p>
        <p style={{ margin: '0 40px' , marginLeft: '0' , fontSize: '25px'}}>секунд</p>
        </div>
      </div>
    )
  }
}
