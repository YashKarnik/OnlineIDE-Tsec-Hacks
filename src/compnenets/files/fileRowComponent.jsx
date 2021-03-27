import React from 'react';
import { DeleteSVG } from '../../assets/svgs';

export default function FileRowComponent({ fileName, date, type }) {
	return (
		<li className='files-row'>
			<div style={{ width: '30%' }}>{fileName}</div>
			<div>{date}</div>
			<div>{type}</div>
			{/* <div className='delete-icon'>
				<DeleteSVG width='15px' height='15px' translateY='-20px' />
			</div> */}
		</li>
	);
}
