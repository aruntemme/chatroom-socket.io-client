import { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import './App.css';
import ChatBox from './components/ChatBox';
import LoginBox from './components/LoginBox';

function App() {
  const [state, setState] = useState({message: '', name: ''});
  const [login, setLogin] = useState({isLoggedin: false, name: ''});
  const [chat, setChat] = useState([]);
  console.log(state.name);

  const socketRef = useRef()

	useEffect(
		() => {
			socketRef.current = io.connect("https://sleepy-falls-56857.herokuapp.com")
			socketRef.current.on("message", ({ name, message }) => {
				setChat([ ...chat, { name, message } ])
			})
			return () => socketRef.current.disconnect()
		},
		[ chat ]
	)

	const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const changeLoginState = (input) => {
		setLogin({ ...login, isLoggedin: true, name: input })
    setState({name: input});
	}

	const onMessageSubmit = (e) => {
		const { name, message } = state
		socketRef.current.emit("message", { name, message })
		e.preventDefault()
		setState({ message: "", name })
	}
  if(login.isLoggedin) {
    return ( <div className="w-8/12 mx-auto flex align-middle justify-center mt-5">
    <ChatBox onTextChange={onTextChange} onMessageSubmit={onMessageSubmit} state={state} chat={chat} />
  </div>
  );
  } else {
    return ( <div className="w-8/12 mx-auto mt-5">
    <LoginBox onTextChange={onTextChange} changeLoginState={changeLoginState} state={state} login={login}/>
  </div>
  );
  }
}

export default App;
