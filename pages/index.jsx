import React, { useState } from 'react'

export default function Home() {
  const [inputValue, setInputValue] = useState()
  const [lastName, setLastName] = useState()
  const [firstName, setFirstName] = useState()
  const subscribeEmail = async () => {
  const res = await fetch("/api/subscribe", {
      method : "POST", 
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        email : inputValue,
        firstName,
        lastName
      })
    })
    const res2 = await res.json()
    if(res2.error){
      console.log(res2.error)
    }else{
      console.log(res2.message)
    }

    setFirstName("")
    setLastName("")
    setInputValue("")
    
  }
  return (
    <div className="max-w-lg mx-auto border p-1">
      <input type="text" placeholder="First Name" className="w-full border p-1 outline-none my-3" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="Last Name" className="w-full border p-1 outline-none my-3" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input type="email" placeholder="Email" className="w-full border p-1 outline-none my-3" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button className="w-full px-5 py-1 bg-gray-500 text-white" onClick={subscribeEmail}>Join Now</button>
    </div>
  )
}
