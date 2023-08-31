import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'
import { FaQuoteRight } from 'react-icons/fa'

import './SliderApp.css'
import usersData from './data'
import { useEffect, useState } from 'react'

const SliderApp = () => {
  const [users, setUsers] = useState(usersData)
	const [currentUserIndex, setCurrentUserIndex] = useState(0)

	function nextUserBtn() {
		if (currentUserIndex !== users.length - 1) {
			setCurrentUserIndex(currentUserIndex + 1);
		}else {
			setCurrentUserIndex(0)
		}
	}
	function prevUserBtn() {
		if (currentUserIndex === 0) {
			setCurrentUserIndex(users.length - 1)
		} else {
			setCurrentUserIndex(currentUserIndex - 1)
		}
	}

	useEffect(() => {
		let interval = setInterval(() => {nextUserBtn()}, 2000)

		return () => {
			clearInterval(interval);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentUserIndex])

  return (
		<div className="container">
			<section>
				<button className="left" onClick={prevUserBtn}>
					<HiChevronLeft className="btn-icon" />
				</button>
				<div className="main">
					{users.map((user, userIndex) => {
						console.log(userIndex);
						const { id, text, image, name, job } = user;
						return (
							<article
								key={id}
								className="user-card"
								style={{
									transform: `translateX(${
										100 * (userIndex - currentUserIndex)
									}%)`,
								}}
							>
								<div className="user-card-image">
									<img src={image} alt={name} />
								</div>

								<h4>{name}</h4>
								<p className="job">{job}</p>
								<p className="text">{text}</p>
								<FaQuoteRight className="icon" />
							</article>
						);
					})}
				</div>
				<button className="right" onClick={nextUserBtn}>
					<HiChevronRight className="btn-icon " />
				</button>
			</section>
		</div>
	);
}

export default SliderApp