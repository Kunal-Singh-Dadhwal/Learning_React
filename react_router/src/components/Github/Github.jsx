import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    
    fetch('https://api.github.com/users/Kunal-Singh-Dadhwal').then(res => res.json()).then( data => setdata(data))
  }, [])

  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl ">Github Followers: {data.followers}
      <img src={ data.avatar_url } alt="Github avatar" className="p-6" width={300}/>

    </div>
  )
}

export default Github