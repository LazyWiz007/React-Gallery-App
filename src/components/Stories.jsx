import React, { Component } from 'react';
import Stories from 'react-insta-stories';

const Strs = (props) => {
	return (
		<Stories 
			stories={props.stories}
			defaultInterval={1500}
			width={300}
			height={500}
		/>
	);
};

export default Strs;