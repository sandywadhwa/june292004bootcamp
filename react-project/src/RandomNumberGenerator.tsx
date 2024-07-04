import { useState } from "react"

function RandomNumberGenerator() {

  const [val, setVal] = useState(0);

  function getRandom(mn: number, mx: number){
    let rnd = Math.floor(Math.random() * Math.pow(10, mx - mn + 1)) + 1;
    return (rnd % (mx - mn + 1)) + mn;
  }
  function changeValue(){
    // setVal(val + 1);
    setVal(getRandom(1, 10));
  }

  return (
    <>
      <h1>Random Number is : {val}</h1>
      <button onClick={changeValue}>Increment Value</button>
    </>
  )
}

export default RandomNumberGenerator