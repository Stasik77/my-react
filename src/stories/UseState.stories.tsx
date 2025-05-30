import {useMemo, useState} from 'react';

export default {
    title: 'useState demo'
}

function generaton() {
    console.log('generaton')
    return 1

}



 export const Example1 = ()=>{

     console.log('example')
     // const  value=useMemo(generaton,[])

     const[counter,setCounter]=useState(generaton)

    const change = (state:number)=> state +1


     return<>
     <button onClick={()=>setCounter(change)}>+</button>
         {counter}
     </>
 }