import { useEffect, useState } from 'react';
import './mainApp.css'
import Loading from './components/Loading';
import Job from './components/Job';

// API URL
	const apiURL = "https://course-api.com/react-tabs-project";

const TabsApp = () => {
	const [data, setData] = useState([]);
	const [loading, setIsLoading] = useState(false);
  const [singleData, setSingledata] = useState([])

	// Fetch Data Function
	async function fetchData() {
		setIsLoading(true);

		try {
			const response = await fetch(apiURL);
			const responseData = await response.json();

			setData(responseData);
      setSingledata(responseData[0])
			setIsLoading(false);
		} catch (error) {
			console.log(error.message);
		}
		setIsLoading(false);
	}

	useEffect(() => {
		fetchData(); 
	}, []);

  useEffect(() => {
    const buttons = document.querySelectorAll('.company-name button')
    
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', () => {
        for (let j = 0; j < buttons.length; j++) {
          buttons[j].classList.remove('clicked')
          buttons[i].classList.add('clicked')
        }
      })
    }
  }, [data])

	const getCompanyNames = data.map((dataItem) => {
		const { company } = dataItem;
		return company;
	});

	const getUniqueCompanyNames = Array.from(new Set(getCompanyNames));


  function dataTabButton(id) {
    console.log(id)
    setSingledata(data[id])
  }

	if (loading) {
		return (
			<div className="container">
				<Loading />
			</div>
		);
	}

	return (
		<div className="container">
			<section id="main">
				<div className="company-name">
					{getUniqueCompanyNames.map((companyName, id) => (
						<button className={id === 0 ? 'clicked' : null} key={id} onClick={() => dataTabButton(id)}>{companyName}</button>
					))}
				</div>

				<div className="company-info">
					{singleData && <Job dataProps={singleData} />}
				</div>
			</section>
		</div>
	);
}

export default TabsApp