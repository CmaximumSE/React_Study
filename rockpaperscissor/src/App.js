import {useState} from "react"
import './App.css';
import Box from './component/Box';

// 1. 박스 2개 (타이틀, 사진정보, 결과)
// 2. 가위 바위 보  버튼.
// 3. 버튼을 클릭한 값이 박스에 보임.
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3, 4의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다. (이기면-초록, 지면-빨강, 비기면-검은색)

const choice = {
  rock: {
    name: "Rock",
    img:"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg"
  },
  scissors: {
    name: "scissors",
    img: "https://ae01.alicdn.com/kf/Sa672725d1b54459886a076e4d0a3f7169/8-Multipurpose-Scissor-Stainless-Steel-Sharp-Scissors-for-Office-Home-General-Use-High-Middle-School-Classroom.jpg"
  },
  paper: {
    name: "paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTph6UFM70XWRt1TPt-YZo0TZN0x0BmVHcurJGmJnLgqj3nfRYUoS3XfTNb8UXsYKPDOMk&usqp=CAU"
  }
}
function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice(); 
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  }

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    if(user.name == computer.name){
      return "tie"
    } else if(user.name == "Rock") {
      return computer.name == "Scissors" ? "win" : "lose";
    } else if(user.name == "Scissors") {
      return computer.name == "paper" ? "win" : "lose";
    } else if(user.name == "paper") {
      return computer.name == "rock" ? "win" : "lose";
    }

  }

  const randomChoice=()=>{
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 array로 만들어 주는 함수.

    let randomItem = Math.floor(Math.random()*itemArray.length);

    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect} result={result} />
        <Box title='Computer' item={computerSelect} result={result} />
      </div>
      <div className='main'>
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
