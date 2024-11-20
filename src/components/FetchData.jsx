import React, {useState,useEffect} from 'react'

function FetchData() {
    const [data,setData] = useState(null);
const[isLoading,setIsLoading] =useState(false);

async function fetchData(){
setIsLoading(true);
const result = await fetch('url');
const answer = await result.json();
setData(answer);
setIsLoading(false)
}

useEffect(()=>{
    fetchData();
},[])

  return (
    <div>
{isLoading? 'Loading...': data ?data.title : 'No Data found'}



    </div>
  )
}

export default FetchData