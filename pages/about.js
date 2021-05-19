import Link from 'next/link';
import faker from 'faker';
import React, { Component } from 'react';
import { makeObservable, observable, toJS } from "mobx";
import {observer} from 'mobx-react';
import myStore from '../src/component/database/store';

class Data{
  mode = 'abxx';
  avatar = faker.image.avatar();
  email = faker.internet.email();
  name = {
    fristName:faker.name.firstName(),
    lastNmae: faker.name.lastName(),
  };
 
  
  constructor(value) {
    
    makeObservable(this, {  // 예전 버전의 mobx에서는 decorate 사용,  최신버전에서 makeObservable사용
      avatar: observable,  // observable이니 내가 관찰할 상태 
      email: observable,    // action 이니 상태의 변화를 일으킬 친구
      name: observable,    // action 이니 상태의 변화를 일으킬 친구
      mode:observable,
    });
}
}

class About extends Component{
  data = new Data;
  generate = () => {
    this.data.avatar = faker.internet.avatar();
    this.data.email=faker.internet.email();
    this.data.name.fristName =faker.name.firstName();
          //console.log('faker.name.findName',faker.name.findName());
          //console.log('faker.image.avatar',faker.image.avatar());
          // console.log('faker.internet.email',faker.internet.email());
     
          // this.setState((state)=>{
          //   return{
          //     name: {
          //       fristName:faker.name.firstName(),
          //       lastNmae: faker.name.lastName(),
          //     },
          //   avatar: faker.image.avatar(),
          //   email: faker.internet.email(),
          //   }
            
          // });
      }
  render(){
    return(
      <div>
        <h1>ABOUTFakerDemo </h1>
        <ol class="list-group list-group-numbered">
          <li class="list-group-item">
            <img src={this.data.avatar} alt=""/>
          </li>
          <li class="list-group-item">{this.data.name.fristName}{this.data.name.lastNmae}</li>
          <li class="list-group-item">{this.data.email}</li>
        </ol>
        <li>
          <Link href = "/"><a>GO HOME</a></Link>
        </li>
        <a href = "/"> Go HOME (without link)</a>
        <button onClick ={this.generate}>generate</button>
        <div>
        mode:{myStore.mode}
      </div>
      </div>
      
    );
  }
}

// observer 처리해주겠다는 의미
About = observer(About);
export default About;
