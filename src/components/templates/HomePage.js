import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Navigation from '../molecules/Navigation';
import ArticleBig from '../organisms/ArticleBig';
import ArticleMedium from '../organisms/ArticleMedium';

import Menue from '../organisms/Menue';

const API_KEY = process.env.REACT_APP_NEWS_KEY;

const HomePage = () => {
	const [menueIsShow, setMenueIsShow] = useState(false);
	const [data, setData] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [category, setCategory] = useState('Wojna');

	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'https://newscatcher.p.rapidapi.com/v1/search_free',
			params: { q: { category }, lang: 'pl', page_size: '25', media: 'True' },
			headers: {
				'X-RapidAPI-Key': `${API_KEY}`,
				'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com',
			},
		};

		axios
			.request(options)
			.then(function (response) {
				setData(response.data);
				setIsLoaded(true);
			})
			.catch(function (error) {
				console.error(error);
				setIsLoaded(false);
			});
	}, [category]);

	const handleShowMenue = () => {
		setMenueIsShow(true);
	};

	const handleHiddenMenue = () => {
		setMenueIsShow(false);
	};

	if (isLoaded) {
		const listOfArticles = [...data.articles];
		const firtsArticle = listOfArticles.splice(0, 1);

		const articleComponents = listOfArticles.map(article => {
			return (
				<ArticleMedium data={article} key={article._id} category={category} />
			);
		});

		return (
			<Aplication>
				<Navigation showMenue={handleShowMenue} />
				<Menue
					hiddenMenue={handleHiddenMenue}
					isShow={menueIsShow}
					category={category}
					setCategory={setCategory}
				/>

				<ArticleBig dataArticle={firtsArticle} category={category} />

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
