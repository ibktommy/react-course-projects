import './StrapiStyle.css'
import './StrapiMedia.css'
import { StrapiProvider } from './context/context'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import Submenu from './components/Submenu'

const StrapiApp = () => {
  return (
		<StrapiProvider>
			<main>
        <Navbar />
        <Hero />
        <Sidebar />
        <Submenu />
      </main>
		</StrapiProvider>
	);
}

export default StrapiApp