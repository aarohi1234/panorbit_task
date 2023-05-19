import { useState } from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import UserInfo from './Pages/UserInfo';

function App() {
	
	const [data, setData] = useState([]);

	const [selectedId, setSelectedId] = useState(1);
	return (
		<Router>
			<div className='App'>
				<Routes>

					<Route
						exact
						path='/'
						element={
							<Home
								data={data}
								setData={setData}
								selectedId={selectedId}
								setSelectedId={setSelectedId}
							/>
						}
					/>
					<Route
						exact
						path='/userInfo'
						element={
							<UserInfo
								data={data}
								setData={setData}
								selectedId={selectedId}
								setSelectedId={setSelectedId}
							/>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
