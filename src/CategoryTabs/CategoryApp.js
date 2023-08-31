import { useState } from 'react';
import randomData from './data'
import Card from './Card';
import './mainApp.css'

const CategoryApp = () => {
  const [data, setData] = useState(randomData);

	// Get Unique Category as an Array from the randomData
	let categoriesArray = randomData.map((dataItem) => {
		const { category } = dataItem;
		return category;
	});
	const sortedCategory = Array.from(new Set(categoriesArray));

	// Function that filters the randomData based on the category-selected and pass it to the data-state
	function filterCategoryHandler(categoryBtnName) {
		let newCategory = randomData.filter(
			(dataItem) => dataItem.category === categoryBtnName,
		);
		return setData(newCategory);
	}

	// Function that displays all catgeories-items
	function showAllCategories() {
		return setData(randomData);
	}

	return (
		<div className="container">
			<section>
				<h2 className="header">Category Menu</h2>

				<div className="main">
					<div className="menu-tabs">
						<button className="cat-btn" onClick={showAllCategories}>
							All
						</button>
						{sortedCategory.map((category, id) => (
							<button
								key={id}
								onClick={() => filterCategoryHandler(category)}
								className="cat-btn"
							>
								{category}
							</button>
						))}
					</div>

					<div className="cat-cards">
						{data.map((dataItem, id) => (
							<Card key={id} {...dataItem} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default CategoryApp