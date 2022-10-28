import React from 'react'
import { Link } from 'components'
import axios from 'axios'
import IconButton from '@mui/material/IconButton'
 import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { DeleteButton, ShowButton, ExportButton, UpdateButton } from './styledButtons'

export const WordItem = ({ word }) => {
	const { id, original, translate } = word

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
				<Link href={`/words/update/${id}`} style={{ textDecoration: 'none' }}>
					{/* <UpdateButton variant='contained'>Update</UpdateButton> */}

					<IconButton color='primary' aria-label='upload picture' component='label'>
						<RefreshIcon />
					</IconButton>
				</Link>

				{/* <DeleteButton onClick={() => deleteWord(id)} variant='contained'>
					Delete
				</DeleteButton> */}

				<IconButton  onClick={() => deleteWord(id)}  color='primary' aria-label='upload picture' component='label'>
						<DeleteIcon />
					</IconButton>


				<Link href={`/words/show/${id}`} style={{ textDecoration: 'none' }}>
					{/* <ShowButton variant='contained'>Show</ShowButton> */}
					<IconButton color='primary' aria-label='upload picture' component='label'>
						<OpenInNewIcon />
					</IconButton>
				</Link>
			</div>

			<div className='original_text'>{original}</div>
			<div className='translate'>{translate}</div>
		</td>
	)
}
