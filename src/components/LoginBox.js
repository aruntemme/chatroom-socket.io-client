import React, { useState } from 'react'

function LoginBox({onTextChange, changeLoginState, state, login}) {
  const [input, setInput] = useState('');

  const onInputChange = (e) => {
    setInput(e.target.value);
  }

  const loginToChat = () => {
    changeLoginState(input)
  }
  return (<div className='w-full max-w-sm my-auto mx-auto '>
     <div className="md:flex md:items-center justify-center mb-6">
      <p className="text-3xl font-bold text-purple-500">ChatRoom</p>
    </div> 
      <div className="md:flex md:items-center justify-start mb-6">
        <input name="name" placeholder="username" onChange={e => onInputChange(e)} value={input} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
      </div>
  <div className="md:flex md:items-center justify-end mb-6">
        <button onClick={loginToChat} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" >
          Login
        </button>
    </div>
  </div>
  )
}

export default LoginBox
