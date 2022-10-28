import React, { useState, useEffect } from 'react'
import { WordItem } from './WordItem'

export const AllWords = ({ words }) => {

	useEffect(() => {
		// setSlides(words.length)
console.log('words', words)
	}, [words])

	return (
		<>
			<div className='allWords'>
				{words.map((word, index) => (
					<WordItem key={index} word={word} />
				))}
			</div>
		</>
	)
}
