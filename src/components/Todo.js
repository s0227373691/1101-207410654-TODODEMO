import React,{useState} from 'react'
import Modal_54 from './Modal_54'
import Backdrop_54 from './Backdrop_54'

const Todo = props => {
    const [showModal, setShowModal] = useState(false)
    const showModalHandler = () => setShowModal(true)
    const closeModalHandler = () => setShowModal(false)
    return (
        <div>
            <div className="card">
                <h2>{props.text}</h2>
                <div className="actions">
                    <button className="btn" onClick={showModalHandler}>Delete</button>
                </div>
            </div>
            {showModal && <Modal_54  onClose={closeModalHandler}/>}
            {showModal && <Backdrop_54 onClose={closeModalHandler} />}
        </div>
    )
}

export default Todo
