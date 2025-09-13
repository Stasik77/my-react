
import React, {useEffect, useState} from 'react';

type PropsType = {

}
const get2digistStruing = (num:number)=>num<10 ? "0" + num : num


export const Clock: React.FC<PropsType> = (props) => {
    const [date,setDate] = useState(new Date())

    useEffect(()=>{


       const intervalId = setInterval(()=>{
           console.log("tic")
            setDate(new Date())
        },1000)

        return ()=>{
            clearInterval(intervalId)
        }
    },[])


    const secondsString = get2digistStruing(date.getSeconds())
    const minutesString = get2digistStruing(date.getMinutes())
    const houtsString = get2digistStruing(date.getHours())


    return <div>
        <span>{houtsString}</span>
        :
        <span>{minutesString}</span>
        :
        <span>{secondsString}</span>

    </div>




}