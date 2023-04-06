import React from 'react';
import ChildComponent from './ChildComponent';

const FunctionClick = () => {

   const handleClick = (e) => {
    console.log("handleClick")
    console.log("e",e)
   }
  // handleClick()
   const nameArray = [
    {id:1,name:"reshma"},
    {id:2,name:"suresh"},
    {id:3,name:"ram"},
    {id:4,name:"sam"}
   ]
    
   const handleClickAlert = (text) => {
    alert("hi" + text)
   }

   //this keyword
//    const studentDetail = {
//         name:'shan',
//         class:'12B',
//         sub:["tam","Eng","Math"],
//         showSub() {
//             console.log(this);
//         }
//     }
//    studentDetail.showSub();

//    function Name(text) {
//     this.text = text
//     console.log(this);
//    }
//    new Name('reshma')
   
     const handleSubmit = (name) => {
        alert(`hello ${name}`)
     }
     
     let submit = true

    return(
        <div>
            <button onClick={(e) => handleClick(e)}>Click</button>
            {/* <p>{name}</p> */}
           {nameArray.map(({id,name}) =>  <button key={id} onClick={() => handleClickAlert(name)}>{id + "." + name}</button>
            )}
          {submit && <div> 
            <ChildComponent handleSubmit={handleSubmit}/>
           </div>}
        </div>
        
    )

}

export default FunctionClick