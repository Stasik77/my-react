
import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemoReact',
}

export const DifficultCountingExample = () =>{

    const[a,setA]=useState<number>(5);
    const[b,setB]=useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA =  useMemo(()=>{

let tempResultA = 1
        for(let i=1;i<=a;i++){
            let fake=0;
            while(fake<10000){
                fake++;
                const fakeValue =Math.random()
            }
            resultA=resultA*i;

        }
        return tempResultA;

    },[a])


  for(let i=1;i<=b;i++){
        resultB=resultB*i;
    }

    return <>
        <input value={a} onChange={(e)=>setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e)=>{setB(+e.currentTarget.value)}}/>
        <hr/>
        <div>
            result for a:{resultA}
        </div>
        <div>
            result for b:{resultB}
        </div>
    </>

}



export const HelpsForExample = () =>{

    const[a,setA]=useState<number>(5);
    const[b,setB]=useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA =  useMemo(()=>{

        let tempResultA = 1
        for(let i=1;i<=a;i++){
            let fake=0;
            while(fake<10000){
                fake++;
                const fakeValue =Math.random()
            }
            resultA=resultA*i;

        }
        return tempResultA;

    },[a])


    for(let i=1;i<=b;i++){
        resultB=resultB*i;
    }

    return <>
        <input value={a} onChange={(e)=>setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e)=>{setB(+e.currentTarget.value)}}/>
        <hr/>
        <div>
            result for a:{resultA}
        </div>
        <div>
            result for b:{resultB}
        </div>
    </>

}