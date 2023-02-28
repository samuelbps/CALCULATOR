
import React, {  useState } from "react";


import {TiBackspace} from 'react-icons/ti'



const Calculator = () => {
     const [num,setNum] = useState(0)
     const [oldnum,setOldNum] = useState(0)
     const [operator,setOperator] = useState()
     

     function inputNum(e) {
      var input = e.target.value
        if(num===0){
         setNum(input)
        }else {
         setNum(num + input)
        }
        
     }

     function clear(){
      setNum(0)
     }
     function percentage(){
      setNum(num / 100)
     }

     function backspace(){
         if(num !== 0){
            setNum(num.slice(0, -1))
            
         }
     }

    

     function operatorHandler(e){
      
               var operatorInput = e.target.value
               setOperator(operatorInput)
               setOldNum(num)
               setNum(0)
     }

     function calculate(){
      if(operator === '/'){
         setNum(oldnum/num)
      }else if(operator === 'X'){
         setNum(oldnum*num)
      }else if(operator === '-'){
         setNum(oldnum - num)
      }else if(operator === '+'){
         setNum(parseFloat(oldnum) + parseFloat(num))
      }
     }
    

    return(
      
        <div className="container mx-auto pt-[100px] bg-logo bg-no-repeat  desktop:bg-16 laptop:bg-16 tablet:bg-14 mobile:bg-14 " >
         
         
        
                    
           <div className="bg-app mx-auto desktop:w-[390px] desktop:h-[760px] pt-4 rounded-3xl  overflow-hidden mobile:w-[351px] mobile:h-[684px]  ">
          
          
          <h1 className="text-white desktop:text-[32px] mobile:text-[28px] absolute desktop:mt-[200px] desktop:ml-[280px] mobile:mt-[180px] mobile:ml-[252px] ">{num}</h1>
           
              
              <div className="grid grid-cols-4 grid-rows-6 desktop:mt-[260px] mobile:mt-[234px]  gap-[7px]  ">
              
              

              <button id="but"  className="bg-normal-btns desktop:w-[92px] desktop:h-[92px] mobile:w-[82.8px] mobile:h-[82.8px] text-teal font-bold text-[32px]" onClick={clear}>AC</button>
              <button id="but" className="bg-normal-btns desktop:w-[92px] desktop:h-[92px] mobile:w-[82.8px] mobile:h-[82.8px] text-teal font-bold text-[32px]" onClick={operatorHandler} value = '/' >/</button>
              <button id="but" className="bg-normal-btns desktop:w-[92px] desktop:h-[92px] mobile:w-[82.8px] mobile:h-[82.8px] text-teal font-bold text-[32px]" onClick={operatorHandler} value='X'>X</button>
              <button id="but" className="bg-teal desktop:w-[92px] desktop:h-[92px] mobile:w-[82.8px] mobile:h-[82.8px] text-white font-bold text-[32px]" onClick={backspace}><TiBackspace className="mx-auto text-[32px]"/></button>

              <button id="but" className="bg-normal-btns desktop:w-[92px] desktop:h-[92px] mobile:w-[82.8px] mobile:h-[82.8px] text-white text-[32px]" onClick={inputNum} value={7} >7</button>
              <button id="but" className="bg-normal-btns desktop:w-[92px] desktop:h-[92px] mobile:w-[82.8px] mobile:h-[82.8px] text-white text-[32px]" onClick={inputNum} value={8}>8</button>
              <button id="but" className="bg-normal-btns desktop:w-[92px] desktop:h-[92px] mobile:w-[82.8px] mobile:h-[82.8px] text-white text-[32px]" onClick={inputNum} value={9}>9</button>
              <button id="but" className="bg-teal desktop:w-[92px] desktop:h-[92px] mobile:w-[82.8px] mobile:h-[82.8px] text-white text-[32px]" onClick={operatorHandler} value='-'>-</button>

              <button id="but" className="bg-normal-btns desktop:w-[92px] desktop:h-[92px] mobile:w-[82.8px] mobile:h-[82.8px] text-white text-[32px]" onClick={inputNum} value={4}>4</button>
              <button id="but" className="bg-normal-btns desktop:w-[92px] desktop:h-[92px] mobile:w-[82.8px] mobile:h-[82.8px] text-white text-[32px]" onClick={inputNum} value={5}>5</button>
              <button id="but" className="bg-normal-btns desktop:w-[92px] desktop:h-[92px] mobile:w-[82.8px] mobile:h-[82.8px] text-white text-[32px]" onClick={inputNum} value={6}>6</button>
              <button id="but" className="bg-teal desktop:w-[92px] desktop:h-[92px] mobile:w-[82.8px] mobile:h-[82.8px] text-white text-[32px]" onClick={operatorHandler} value='+'>+</button>

              <button id="but" className="bg-normal-btns desktop:w-[92px] desktop:h-[92px] mobile:w-[82.8px] mobile:h-[82.8px] text-white text-[32px]"  onClick={inputNum} value={1}>1</button>
              <button id="but" className="bg-normal-btns desktop:w-[92px] desktop:h-[92px] mobile:w-[82.8px] mobile:h-[82.8px] text-white text-[32px]" onClick={inputNum} value={2}>2</button>
              <button id="but" className="bg-normal-btns desktop:w-[92px] desktop:h-[92px] mobile:w-[82.8px] mobile:h-[82.8px] text-white text-[32px] " onClick={inputNum} value={3}>3</button>
              <button id="but" className="bg-orange desktop:w-[92px] desktop:h-[192px] mobile:w-[82.8px] mobile:h-[172.8px] text-white row-span-2  text-[32px] " onClick={calculate}>=</button>

              <button id="but" className="bg-normal-btns desktop:w-[92px] desktop:h-[92px] mobile:w-[82.8px] mobile:h-[82.8px] text-white text-[32px]" onClick={inputNum} value='.'>.</button>
              <button id="but" className="bg-normal-btns desktop:w-[92px] desktop:h-[92px] mobile:w-[82.8px] mobile:h-[82.8px] text-white text-[32px]" onClick={inputNum} value={0}>0</button>
              <button id="but" className="bg-normal-btns desktop:w-[92px] desktop:h-[92px] mobile:w-[82.8px] mobile:h-[82.8px] text-white text-[32px] " onClick={percentage}  >%</button>
              </div>
              
              
              
           </div>
           
          
        </div>
    )
}

export default Calculator