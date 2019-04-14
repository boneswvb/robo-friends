import React from 'react';

const Card = ({id, name, email}) => {
	return(
		<div className='tc bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5'>
			<img alt='Contact card' src={`https://robohash.org/${id}?200x200`} />
			<h1>{ name }</h1>
			<p>{ email }</p>
		</div>
	);
};

export default Card;