import { observer } from 'mobx-react'
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import myStore from './database/store'
import firebase from './database/firebase';

class Gnb extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  login=() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function (result){
      console.log('result.credential.accessToken',result.credential.accessToken);
      console.log('result.user',result.user);
      
      myStore.use = {
        displayName: result.user.displayName,
        photoURL:result.user.photoURL,
        email:result.user.email,
        uid:result.user.uid
      }
    })
    .catch(error =>{
      alert('login error:' +error.message);
      console.log(error);
    });
  
  };
  render(){
    const { activeItem } = this.state
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
  <div className="my-2 my-lg-0">
  {myStore.use==null&&(
    <div>
      '로그인해주세요'
    <button class="btn btn-outline-success" type="button" onClick={this.login}>Sign up</button>
    </div>

    )}
  {myStore.use!=null&&(
    myStore.use.displayName + '님 반갑습니다'
    )}
    </div>
    
</nav>
      
       


<div className ="container">

{ this.props.children }

</div>
</div>
      
      );
  }
  
}
Gnb = observer(Gnb);
export default Gnb;
