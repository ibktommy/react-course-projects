import { createContext, useState, useContext } from "react";

const StrapiContext = createContext();

export const StrapiProvider = ({ children }) => {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [pageID, setPageID] = useState('default');

	function openSideBar() {
		setIsSideBarOpen(true);
	}
	function closeSideBar() {
		setIsSideBarOpen(false);
	}

	return (
		<StrapiContext.Provider
			value={{ isSideBarOpen, setIsSideBarOpen, openSideBar, closeSideBar, pageID, setPageID }}
		>
			{children}
		</StrapiContext.Provider>
	);
};

export const useStrapiContext = () => useContext(StrapiContext);
