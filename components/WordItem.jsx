import React from 'react'
import { Link } from 'components'
import axios from 'axios'

import { DeleteButton, ShowButton, ExportButton,UpdateButton } from './styledButtons'

export const WordItem = ({ word }) => {
	const { id, word_original, trans_ru } = word

	// const deleteWord = id => {
	//     axios
	//         .delete('http://localhost:5000/' + id)
	//         .then(res => {
	//             if (res.status === 200) {
	//                 alert('Word successfully deleted')
	//                 window.location.reload()
	//             } else Promise.reject()
	//         })
	//         .catch(err => alert('Something went wrong'))
	// }

	return (
		<td className='cell'>
			<div className='edit'>


				{/* <Link to={'/edit/' + props.word._id}>edit</Link> |{' '} */}

                <Link href={`/words/update/${id}`} style={{ textDecoration: 'none' }}>
				<UpdateButton variant='contained'>Update</UpdateButton>
			</Link>


				{/* <a
					href='#'
					onClick={() => {
						props.deleteWord(props.word._id)
					}}
				>
					delete
				</a> */}
			</div>

			<div className='description'>{word_original}</div>
			<div className='translate'>{trans_ru}</div>
		</td>

		// <div className='wrapperWord'>
		//     <div className='wrapperImage'>
		//         <span className='idTitle'>{id}</span>
		//         <img src={image} alt='word' />
		//         <div className='shadowWordName'>{name}</div>
		//     </div>

		//     <h4>JSON:</h4>
		//     <div className='wrapperInfo'>
		//         <pre> {json} </pre>
		//     </div>

		//     <div className='wrapperStaticButtons'>
		//         <DeleteButton onClick={() => deleteWord(id)} variant='contained'>
		//             Delete
		//         </DeleteButton>

		//         <Link href={`/words/show/${id}`} style={{ textDecoration: 'none' }}>
		//             <ShowButton variant='contained'>Show</ShowButton>
		//         </Link>

		//         <Link href={`/words/export/${id}`} style={{ textDecoration: 'none' }}>
		//             <ExportButton variant='contained'>Export</ExportButton>
		//         </Link>
		//     </div>
		// </div>
	)
}
