import React, { useState, useEffect } from 'react'
import { WordItem } from './WordItem'
import { Link } from 'components'

export const AllWords = ({ words }) => {
	useEffect(() => {
		// setSlides(words.length)
		console.log('words', words)
	}, [words])

	// deleteWord(id) {
	// 	axios.delete('http://localhost:5000/words/' + id)
	// 	  .then(response => {console.log(response.data)});

	// 	this.setState({
	// 	  words: this.state.words.filter(el => el._id !== id)
	// 	})
	//   }

	return (
		<>
			<div className='allWords'>
				{words.map((word, index) => (
					<WordItem key={index} word={word} />
					// <WordItem key={index} word={word} deleteWord={deleteWord}/>
				))}
			</div>

			<div className='wrapperButton'>
				<Link href='/words/add' className='button'>
					<span>Add Word </span>
				</Link>
			</div>
			<div className='wrapperButton'>
				<Link href='/words/import' className='button'>
					<span>Import Word </span>
				</Link>
			</div>
		</>
	)
}
