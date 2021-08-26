import React, {useRef, useEffect} from 'react'

function ChatBox({onMessageSubmit, onTextChange, state, chat}) {
  const el = useRef(null);
  useEffect(() => {
    el.current.scrollIntoView({behavior: 'smooth' });
  });
  const renderChat = () => {
    return chat.map(({name, message}, index) => (
      <div key={index} className={`m-2 ${name === state.name ? ' flex justify-end': ' flex justify-start' }`}>
        <div className={` h-max max-w-full break-words ${name === state.name ? 'bg-gray-200 border-2 rounded-b-xl rounded-tl-xl flex justify-start border-gray-300'  :'bg-purple-200 border-2 rounded-b-xl rounded-tr-xl border-purple-300 text-right' }`}>
          <div className="m-2">
            <div className={`text-xs ${name === state.name? 'text-right text-gray-700' : 'text-left text-purple-700' } font-bold`}>{name}</div>
            <div className="text-lg text-black break-normal" >{message}</div>
          </div>
        </div>
      </div>
    ))
  }
  return (
    <form onSubmit={onMessageSubmit} className="w-full max-w-sm grid grid-rows-6 gap-6 mx-auto border-0 rounded-lg bg-gray-100 h-screen">
    <div className="row-span-5 m-4 rounded-md ml-5 mt-5 h-full overflow-y-scroll no-scrollbar">
      {renderChat()}
      <div id={'el'} ref={el}>
    </div>
    </div>
    <div className="row-span-1 grid grid-cols-4 gap-2 justify-between align-middle m-3">
      <div className="w-full col-span-3">
        <input name="message" onChange={e => onTextChange(e)} value={state.message}  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-message" placeholder="Enter Message" />
      </div>
      <div className="w-full col-span-1">
        <button onClick={onMessageSubmit} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" >
          Send
        </button>
      </div>
    </div>
  </form>
  )
}

export default ChatBox
