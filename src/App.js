import React, { Component } from 'react';
import logo_m from './logo_m.svg';
import pic from './vmask.jpg';
import './App.css';


class App extends Component {
  constructor(props) {
  super(props);
  this.state ={

    navbar:{
      position: 'fixed',
      background: 'hsla(0, 0%, 0%, 0)',
      width: '100%'
    },
    hero:{
      opacity: 1,
      width: '100%',

    },
    style: 'this.state.navup'
  }
  this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    //let scrollPosition = document.body.scrollTop;
    let scrollY = window.scrollY;
    //console.log(scrollPosition);
    if (scrollY >= 530){
      this.setState({
        hero:{
          opacity: 0,
          width: '100%'
        },
        navbar:{
          background: "#212121",
          opacity: 1,
          position: 'fixed',
          width: '100%'
          },

        })
    }else if (scrollY <= 530){
      this.setState({
        hero:{
          opacity: 1,
          width: '100%',

        },
        navbar:{
          background:  'hsla(0, 0%, 0%, 0)',
          position: 'fixed',
          },

        })
    }
    //console.log(scrollY);

    }

  render() {
    return (
      <div>

        <div id="mobileNav" style={this.state.navbar}>
          	<img src={logo_m} className="Lubn-logo"  alt="logo"/>
        </div>

        <div id="hero_desk" className="fluid-hero" style={this.state.hero}>
        <img src={pic}  alt=""/>
        </div>

        <p className="revealActive">LubnBox verifies a guest’s access with our proprietary three-step verification process: <br/><br/><br/>
        1. The guest must physically be at the location of the LubnBox during the time scheduled by the host. <br/><br/><br/>
        2. The guest must dial the telephone number displayed on the LubnBox at time of arrival. <br/><br/><br/>
         This number is randomly displayed, and changes every time the LubBox is activated.<br/><br/><br/>
        3. The guest must call from the mobile phone number that has been granted access by you.<br/><br/><br/>
        LubnBox will only grant access to the property Key Magazine, once all three of the above authentications have been met - right time, right call-in number, and dialed from the right phone.</p>

        <p className="revealActive">LubnBox verifies a guest’s access with our proprietary three-step verification process: <br/><br/><br/>
        1. The guest must physically be at the location of the LubnBox during the time scheduled by the host. <br/><br/><br/>
        2. The guest must dial the telephone number displayed on the LubnBox at time of arrival. <br/><br/><br/>
         This number is randomly displayed, and changes every time the LubBox is activated.<br/><br/><br/>
        3. The guest must call from the mobile phone number that has been granted access by you.<br/><br/><br/>
        LubnBox will only grant access to the property Key Magazine, once all three of the above authentications have been met - right time, right call-in number, and dialed from the right phone.</p>

        <p className="revealActive">LubnBox verifies a guest’s access with our proprietary three-step verification process: <br/><br/><br/>
        1. The guest must physically be at the location of the LubnBox during the time scheduled by the host. <br/><br/><br/>
        2. The guest must dial the telephone number displayed on the LubnBox at time of arrival. <br/><br/><br/>
         This number is randomly displayed, and changes every time the LubBox is activated.<br/><br/><br/>
        3. The guest must call from the mobile phone number that has been granted access by you.<br/><br/><br/>
        LubnBox will only grant access to the property Key Magazine, once all three of the above authentications have been met - right time, right call-in number, and dialed from the right phone.</p>


      </div>
    );
  }
}

export default App;
