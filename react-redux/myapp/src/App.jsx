import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { login, logout } from '../features/counter/counterSlice'

function App() {
	const [count, setCount] = useState(0)
	const dispatch =  useDispatch()
	const value = useSelector((state)=>state.counter.value);
	console.log(`Value: ${value}`)
	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
				<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
				<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
				count is {count}
				</button>
				<p>
				Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>

			<>
				<h3>Running Redux Practise</h3>
				<p className='text-white'>Value : {value }</p>

				<div>
					<p>Change State value</p>
					<button onClick={()=>{dispatch(login())}}>Login</button>
					<button onClick={()=>{dispatch(logout())}}>Logout</button>
				</div>
			</>
		</>
	)
}

export default App
