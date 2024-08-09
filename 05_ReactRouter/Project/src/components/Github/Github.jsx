import { useEffect } from "react";
import { useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github(){
    const data = useLoaderData()

    // using this we will see some legging while loading this page

    // const [data, setData] =useState({});

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/keep-LearningCode")
    //     .then((res)=>res.json())
    //     .then((res)=>setData(res))
    // }, [])

    
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
      )
}

export default Github

export const GitHubInfoLoader = async()=>{
    const res = await fetch("https://api.github.com/users/keep-LearningCode");
    return res.json()

}

