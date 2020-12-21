import React, { useState } from 'react';
import axios from "axios";
import useSWR from "swr";

type State = {
	title: string;
	author: string;
	yearReleased: number;
}
const initialState = {
	title: '',
	author: '',
	yearReleased: 2020,
}
const New: React.FC = () => {
	const { data } = useSWR('/api/hello', (url: string) => axios.get(url).then(res => res.data));
	console.log('@new: data is ', data);
	const [state, setState] = useState<State>(initialState);
	console.log('@New: state is ', state)
  const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		axios.post('/api/new', state).then(res => console.log('@posted: ', res));
	}
	return (
		<React.Fragment>
			<div>
				Title: 
				<input
					name="title"
					value={state.title}
					onChange={(e) => setState({ ...state, title: e.currentTarget.value})}
				/>
			</div>
			<div>
				Author: 
				<input
					name="author"
					value={state.author}
					onChange={(e) => setState({ ...state, author: e.currentTarget.value})}
				/>
			</div>
			<div>
				YearReleased: 
				<select name="yearReleased" value={state.yearReleased} onChange={(e) => setState({ ...state, yearReleased: parseInt(e.currentTarget.value, 10)})}>
					<option value="2020">2020</option>
					<option value="2010">2010</option>
					<option value="2000">2000</option>
					<option value="1990">1990</option>
					<option value="1980">1980</option>
				</select>
			</div>
			<div>
				<button onClick={handleSubmit}>Add</button>
			</div>
		</React.Fragment>
	);
}

export default New;