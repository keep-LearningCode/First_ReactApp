import React from "react";
import {useParams} from 'react-router-dom'
export default function User(){
    const {userId} =useParams();

    return(
        <div className="bg-gray-500 text-white txt-3xl p-4">User : {userId}</div>
    )

}