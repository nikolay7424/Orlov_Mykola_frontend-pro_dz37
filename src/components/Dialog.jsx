import PropTypes from "prop-types"

import { useRef } from "react"

Dialog.propTypes = {
    deleteNumber: PropTypes.func.isRequired,
    userIndex: PropTypes.number.isRequired,
}
function Dialog(props) {
    const dialog = useRef()
    return (
        <dialog ref={dialog} className="modal">
            <h2>are you sure?</h2>
            <div className="button-wrapper">
                <button
                    onClick={() => props.deleteNumber(props.userIndex)}
                    className="btn-green"
                >
                    yes
                </button>
                <button
                    onClick={() => dialog.current.close()}
                    className="btn-red"
                >
                    no
                </button>
            </div>
        </dialog>
    )
}

export default Dialog
