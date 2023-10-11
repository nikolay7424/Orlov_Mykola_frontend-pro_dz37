import PropTypes from "prop-types"
import Dialog from "./Dialog"
import { useDispatch } from "react-redux"
import { usersActions } from "../store/index"

import { useNavigate } from "react-router-dom"

PhoneBook.propTypes = {
    userArr: PropTypes.array.isRequired,
    userIndex: PropTypes.number.isRequired,
    setUserIndex: PropTypes.func.isRequired,
}

function PhoneBook(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function openModal(index) {
        const modal = document.querySelector("dialog")
        modal.show()
        props.setUserIndex(index)
    }

    function deleteNumber(index) {
        const modal = document.querySelector("dialog")
        modal.close()
        dispatch(
            usersActions.setUsers(
                props.userArr.filter((user) => user != props.userArr[index])
            )
        )
    }

    function editContact(index) {
        props.setUserIndex(index)
        navigate(`/edit/${index}`)
    }

    return (
        <div>
            <Dialog deleteNumber={deleteNumber} userIndex={props.userIndex} />
            <table>
                <tbody>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Phone number</th>
                        <th>Actions</th>
                    </tr>
                    {props.userArr.map((user, index) => (
                        <tr key={index}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.phone}</td>
                            <td className="button-wrapper">
                                <button
                                    onClick={() => editContact(index)}
                                    className="btn-yellow"
                                >
                                    edit
                                </button>
                                <button
                                    onClick={() => openModal(index)}
                                    className="btn-red"
                                >
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PhoneBook
