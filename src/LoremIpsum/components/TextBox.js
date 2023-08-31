import React from "react";
import { nanoid } from "nanoid";

const TextBox = ({ paragraph }) => {
	return (
		<div id="text-container">
			{paragraph.map((para) => {
				return <article key={nanoid()}>{para}</article>;
			})}
		</div>
	);
};

export default TextBox;
