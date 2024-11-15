import React, { useEffect, useState } from 'react'
import { useParams, useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData()
  
  // This can take time 
  // const [data, setdata] = useState([]);
  // useEffect(() => {
    
  //   fetch(`https://api.github.com/users/${displayusername}`).then(res => res.json()).then( data => setdata(data))
  // }, [])

  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl ">Github Followers: {data?.followers}
      <img src={ data?.avatar_url } alt="Github avatar" className="p-6" width={300}/>

    </div>
  )
}

export default Github

// SO to optimise and reduce time we use loader to load it early
export const githubinfoloader = async ({params}) => {
  const displayusername = params.username || "Kunal-Singh-Dadhwal"
  const res = await fetch(`https://api.github.com/users/${displayusername}`)
  return res.json()
}