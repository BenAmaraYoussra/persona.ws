import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props) {
        super(props);
        this.state={
            person:{
                fullName:'Bayouss',
                bio:'25 years ',
                imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjXHKjLyGtc2msye_na-hFTUI2n_SAVa4i6A&usqp=CAU',
                profession:'Deloppeur Web'
            },
            compteur: 10,
        }
    }

    componentDidMount= () => {
        this.interval=setInterval(() => {
            this.setState({compteur:this.state.compteur+1})
        }, 1000);
    }
    
    componentWillUnmount= () => {
        clearInterval(this.interval)
    }

  render() {
    return (
      <div>
       
       
        <div>
        <h1>{this.state.person.fullName}</h1>
        <p>compteur:{this.state.compteur}</p>
           <h2>{this.state.person.bio}</h2>
           <img src={this.state.person.imgSrc} alt='Bayouss'></img>
           <h2>{this.state.person.profession}</h2>
           </div>
        </div>
    )
  }
}
