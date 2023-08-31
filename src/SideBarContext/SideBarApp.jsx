import React from 'react'
import './SideBarStyle.css'
import Home from './components/Home'
import Modal from './components/Modal'
import SideBar from './components/SideBar'
import { SideBarProvider } from './components/context/context'

const SideBarApp = () => {
  return (
		<main>
			<SideBarProvider>
        <Home />
        <Modal />
        <SideBar />
      </SideBarProvider>
		</main>
	);
}

export default SideBarApp

