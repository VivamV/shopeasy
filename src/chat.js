import React from 'react';
import Chatbot from "react-simple-chatbot";
const steps=[
{
  id:'0',
  message:'welcome to chat',
  trigger:'1',
},
{
  id:'1',
  message:'Bye!',
  end:true,
},

];
function chat() {
  return (
    <div>
      <Chatbot steps={steps}/>
    </div>
  )
}

export default chat
