import axios from 'axios'
import React from 'react'
import { useState  } from 'react';
import { useEffect } from 'react';




const Test = ({Mode} ) => {

    const  [ data , setdata ] = useState([])
    // const  [ colo , setcolo ] = useState("")
    // const [Mode, setMode] = useState("light");
    // const chacolo = ()=>{
    //         if(Mode === "light"){
    //             setcolo(document.body.style.backgroundColor = "black",)
    //             document.body.style.color = "white"
    //         }
    //     else{
    //         setcolo(document.body.style.backgroundColor = "wite",)
    //             document.body.style.color = "black"
    //     }
    // }


    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            setdata(res.data)})
        
        
    } , [])


  return (
    <div style={{color : Mode === "light" ? "gray":"white"}}>
      {
        data.map((d)=>{
                const {id , title ,body} = d;
                return <>
                    <h2 className='text-blue-800 border-2 rounded-xl' >{id}</h2>
                    <h4 >{title}</h4>
                    <p>{body}</p>
                            

                    </>
                    

        })
      }
    </div>
  )
}

export default Test
