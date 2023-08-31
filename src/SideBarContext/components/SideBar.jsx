import { FaTimes } from 'react-icons/fa'
import { links, socials } from '../data'
import { useSideBarContext } from './context/context'

const SideBar = () => {
  const { isSideBarOpen, closeSideBar } = useSideBarContext()
  return (
    <section id="sidebar" className={isSideBarOpen ? 'sidebar-display' : null}>
      <div className="logo">
        <span>Side</span>
        <span>Bar</span>
      </div>

      <button className="close-sidebar" onClick={closeSideBar}>
        <FaTimes />
      </button>

      <ul className='sidebar-links'>
        {links.map((link) => {
          const {id, url, text, icon} = link
          return (
            <li key={id}>
              <span>{icon}</span>
              <a href={url}>{text}</a>
            </li>
        )
        })}
      </ul>

      <ul className="sidebar-socials">
        {socials.map((social) => {
          const {id, icon, url} = social
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default SideBar