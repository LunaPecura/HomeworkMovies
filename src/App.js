import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';


function App() {

	const apiKey="9c813b50"
	const [movie, setMovie] = useState(null)

	const getMovie = async(searchTerm) => {
		const response = await 
			fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
		const data = await response.json()
		setMovie(data)
	}

	return (
		<div className="App">
			<Form getMovieFunction={getMovie} />
			<MovieDisplay />
		</div>
	)
}

export default App;
