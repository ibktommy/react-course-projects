import sublinks from '../data'
import { FaTimes } from 'react-icons/fa'
import { nanoid } from 'nanoid'
import { useStrapiContext } from '../context/context'

const SideBar = () => {
  const { isSideBarOpen, closeSideBar } = useStrapiContext()

  return (
    <section id='sidebar' className={isSideBarOpen ? 'display' : null}>
      <button className='sidebar-btn' onClick={closeSideBar}>
        <FaTimes />
      </button>

      <div className="sidebar-menu">
        {sublinks.map((sublink) => {
          const {page, links} = sublink

          return (
            <article key={nanoid()} className='sidebar-menu-links'>
              <h3>{page}</h3>
              <div className="sidebar-options">
                {links.map((link, index) => {
                  const { label, icon } = link
                  return (
                    <div key={index} className="sidebar-options-content">
                      <span>{icon}</span>
                      <span>{label}</span>
                    </div>
                  )
                })}
              </div>
            </article>
          )
        })}
      </div>

    </section>
  )
}

export default SideBar