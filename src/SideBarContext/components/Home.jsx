import {FaBars} from 'react-icons/fa'
import { useSideBarContext } from './context/context'

const Home = () => {
  const { openModal, openSideBar } = useSideBarContext()

  return (
    <section id='home'>
      <button className="menu-bar" onClick={openSideBar}>
        <FaBars />
      </button>
      <button className="modal-btn" onClick={openModal}>
        Show Modal
      </button>
    </section>
  )
}

export default Home