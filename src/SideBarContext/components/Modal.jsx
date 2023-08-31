import { FaTimes } from 'react-icons/fa'
import { useSideBarContext } from './context/context';

const Modal = () => {
  const {isModalOpen, closeModal} = useSideBarContext()

  return (
		<section id="modal" className={isModalOpen ? 'modal-display' : null}>
			<div className="modal-content">
				<h2>Modal Overlay</h2>
				<button className='close-modal-btn' onClick={closeModal}>
					<FaTimes />
				</button>
			</div>
		</section>
	);
}

export default Modal