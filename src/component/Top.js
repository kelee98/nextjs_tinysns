// 이미지는 public public 은 정적 파일 일때를 제공 할 수있다.
import { Header } from 'semantic-ui-react'
import Gnb from "./Gnb"
export default function Top(){
  return (
    <div>
      <div style= {{display :"flex"}}>
        <div style = {{flex:"100px 0 0"}}>
          <img
            src= "/images/snoopy.png"
            alt="logo"
            style={{display:"block",width :150}}
            />
        </div>
      <Header as="h1">My sns</Header>
      </div>
    </div>
  );
}
