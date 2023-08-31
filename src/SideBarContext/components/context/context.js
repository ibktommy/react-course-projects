import { createContext, useState, useContext } from "react";

const SideBarGlobalContext = createContext();

export const SideBarProvider = ({ children }) => {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }
  function openSideBar() {
    setIsSideBarOpen(true)
  }
  function closeSideBar() {
    setIsSideBarOpen(false)
  }

	return (
		<SideBarGlobalContext.Provider
			value={{
				isSideBarOpen,
				isModalOpen,
        openModal,
        closeModal,
        openSideBar,
        closeSideBar,
			}}
		>
			{children}
		</SideBarGlobalContext.Provider>
	);
};

export const useSideBarContext = () => useContext(SideBarGlobalContext);
