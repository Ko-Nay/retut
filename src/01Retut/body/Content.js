import React, { useState } from 'react'
import { users } from '../../Users';


const Content = () => {

  const [ num, setNum ] = useState(null);

  /* fun for random user name */
  const handleChangeName = () => {
    const name = ["Nay", "Leon", "Gustin"];
    const random = Math.floor(Math.random() * 3);
    return name[random];
  };

  /* fun for random numbers */
  const handleChangeNumber = () => {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    const ranNum = Math.floor(Math.random() * 9 );
    return setNum(num[ranNum]);
    
  }

  const clickEvent= (e) => {
    console.log(e.target.innerText);
  }
  
  const doubleClick=(e) => {
    console.log('You Double clicked me!');
  }

  return (
    <>    
      <button className="tut2">02Retut</button><br/><br/>
      <main>
        <p>
        Hello {handleChangeName()} ! How are you?
        </p><br/><br/>
        Click the below button and pick one of nine random numbers.
        <h1>" {num} "</h1>
        <button 
          className="random"
          onClick={() => handleChangeNumber()}
        >
          Random Me!
        </button><br/><br/>
        <button 
          className="event"
          onClick ={(e) => clickEvent(e)}
        >
          I'm Event!
        </button><br/><br/>
        <p 
          className="double"
          onDoubleClick={() => doubleClick()}
          >Double click me {handleChangeName() }</p>
      </main>
    </>
  )
}

export default Content
