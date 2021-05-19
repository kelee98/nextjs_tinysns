import Head from "next/head"
import styles from "../styles/Home.module.css"
import Link from 'next/link'
import React ,{Component} from 'react';
import Profile from "../src/component/profile";
import Gnb from "../src/component/Gnb";
import myStore from "../src/component/database/store"
import { observer } from "mobx-react";
import firebase from '../src/component/database/firebase';
import {v4 as uuidv4, v4} from 'uuid';
import db from '../src/component/database/db'
import { makeObservable, observable } from "mobx";

class Data{
  feeds = [];
  constructor(value){
    makeObservable(this,{
      feeds:observable
    })
  }
}
class Home extends Component {
  data = new Data();
  constructor(){
    super();
    db.collection('feeds')
    .get()
    //항상 배열의 형태로 데이터들이 오게 됨
    .then(result=>{
      const newFeeds = [];
      result.forEach(element => {
        const docData = element.data();
        docData.uid = element.id;
        newFeeds.push(docData);
        console.log('element.data()',docData);
      });
      this.data.feeds= newFeeds;
    })
    .catch(error=>{
      alert('error'+error.message)
      console.log(error);
    })

  }
  refTextArea(textarea){
    this.textarea=textarea;
  }
  write=()=>{
    const now = new Date;
    const feed = {
      contents:this.textarea.value,
      author:{
        displayName: myStore.use.displayName,
        photoURL: myStore.use.photoURL,
        email: myStore.use.email,
        uid: myStore.use.uid
      },
      create_at:now,
      update_at:now,

    };
  const uid = uuidv4();
   db.collection('feeds')
    .doc(uid)
    .set(feed)
    .then(res=>{
      this.textarea.value = '';
    })
    .catch(error=>{
      console.log(error);
    })
    console.log("this.textarea.value",this.textarea.value);
  }
  render() {
    return (
    
      <div>
        <Gnb>
          {myStore.use != null &&(
            <div>
            <textarea ref={ref =>this.textarea = ref} rows="6" className ="form-control mb-2"></textarea>
            <button class="btn btn-primary" onClick={this.write}>전송</button>
            </div>
          )}
        <Profile size = { 50}/>
        <ul>
          {this.data.feeds.map(feed=>(
            /*고유한 키를 ㄹ가지게 해줌*/
            <li key= {feed.uid}>
              [{feed.uid}]
              {feed.contents}
              <div>
                {feed.author.displayName}
              </div>
            </li>
          ))}
        </ul>
        <br/>
        1.컴파일과 번들링이 자동으로 된다 (webpack 과 babel)
        <br/>
        2. 자동 리프레쉬 기능으로 수정하면 화면에 바로 반영된다.
        <br/>
        3.서버사이드 렌더링이 지원 된다.
        <br/>
        4. 스태틱 파일을 지원합니다.
        <Link href="/about">
          <a>GO ABOUT</a> 
        </Link>
        </Gnb> 
      </div>
        
      
      
      );

    }

 
}
Home = observer(Home);
export default Home;
