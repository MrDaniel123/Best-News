import { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Navigation from '../molecules/Navigation';
import ArticleBig from '../organisms/ArticleBig';
import ArticleMedium from '../organisms/ArticleMedium';

import Menue from '../organisms/Menue';

const API_KEY = process.env.REACT_APP_NEWS_KEY;

const initialState = {
	menueIsShow: false,
	data: {},
	isLoaded: false,
	category: 'Poland',
};

const stateReducet = (state, { type, payload }) => {
	switch (type) {
		case 'showMenue':
			return { ...state, menueIsShow: true };
		case 'hiddenMenue':
			return { ...state, menueIsShow: false };

		case 'isLoadindData':
			return { ...state, isLoaded: payload };
		case 'setData':
			return { ...state, data: payload };

		case 'changeCategory':
			return { ...state, category: payload };
		default:
			throw new Error('Reducer problrm ');
	}
};

const HomePage = () => {
	const [state, dispatch] = useReducer(stateReducet, initialState);

	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'https://free-news.p.rapidapi.com/v1/search',
			params: { q: `${state.category}`, lang: 'en' },
			headers: {
				'X-RapidAPI-Key': `${API_KEY}`,
				'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
			},
		};

		axios
			.request(options)
			.then(function (response) {
				dispatch({ type: 'setData', payload: response.data });
				dispatch({ type: 'isLoadindData', payload: true });
			})
			.catch(function (error) {
				console.error(error);
			});
	}, [state.category]);

	const handleShowMenue = () => {
		dispatch({ type: 'showMenue' });
	};

	const handleHiddenMenue = () => {
		dispatch({ type: 'hiddenMenue' });
	};

	if (state.isLoaded) {
		const listOfArticles = [...state.data.articles];
		const firtsArticle = listOfArticles.splice(0, 1);

		const articleComponents = listOfArticles.map(article => {
			return (
				<ArticleMedium
					data={article}
					key={article._id}
					category={state.category}
				/>
			);
		});

		return (
			<Aplication>
				<Navigation showMenue={handleShowMenue} />
				<Menue
					hiddenMenue={handleHiddenMenue}
					isShow={state.menueIsShow}
					category={state.category}
					setCategory={dispatch}
				/>

				<ArticleBig dataArticle={firtsArticle} category={state.category} />

				{articleComponents}
			</Aplication>
		);
	} else {
		return console.log('Loadnig');
	}
};

const Aplication = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: flex-start;
	width: 100%;
	min-height: 100vh;
`;

export default HomePage;
