import { useState } from "react"

function TeamComponent() {

  const [val, setVal] = useState("");

  function tossCoin(){
    var rnd = Math.floor(Math.random() * 10) % 2 + 1;
    if(rnd == 1){
      setVal("Heads");
    }
    else{
      setVal("Tails");
    }
  }
  return (
    <>
      <button onClick={tossCoin}>Toss A Coin</button>
      <h1>{val}</h1>
    </>
  )
}

export default TeamComponent