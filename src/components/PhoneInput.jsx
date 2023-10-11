import PropTypes from "prop-types"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { usersActions } from "../store/index"
import { useDispatch } from "react-redux"

PhoneInput.propTypes = {
    userArr: PropTypes.array.isRequired,
    isEdit: PropTypes.bool,
    userIndex: PropTypes.number,
}

function PhoneInput(props) {
    const navigate = useNavigate()
    const [firstNameValue, setFirstNameValue] = useState("")
    const [lastNameValue, setLastNameValue] = useState("")
    const [phoneValue, setPhoneValue] = useState("")
    const dispatch = useDispatch()

    function updateUser(e) {
        return {
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            phone: e.target[2].value,
        }
    }

    function saveUser(e) {
        e.preventDefault()
        if (props.isEdit) {
            dispatch(
                usersActions.setUsers(
                    props.userArr.map((user, index) =>
                        index === props.userIndex ? updateUser(e) : user
                    )
                )
            )
            return navigate("/contacts")
        }

        dispatch(
            usersActions.setUsers([
                ...props.userArr,
                {
                    firstName: e.target[0].value,
                    lastName: e.target[1].value,
                    phone: e.target[2].value,
                },
            ])
        )

        return navigate("/contacts")
    }

    return (
        <div>
            <form onSubmit={(e) => saveUser(e)} className="phone-form">
                <div className="form-input">
                    <label htmlFor="name">type in your first name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) => setFirstNameValue(e.target.value)}
                        defaultValue={
                            props.isEdit
                                ? props.userArr[props.userIndex].firstName
                                : firstNameValue
                        }
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="lastname">type in your last name</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        onChange={(e) => setLastNameValue(e.target.value)}
                        defaultValue={
                            props.isEdit
                                ? props.userArr[props.userIndex].lastName
                                : lastNameValue
                        }
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="phone">type in your phone</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        onChange={(e) => setPhoneValue(e.target.value)}
                        defaultValue={
                            props.isEdit
                                ? props.userArr[props.userIndex].phone
                                : phoneValue
                        }
                    />
                </div>
                <div className="button-wrapper">
                    <button type="submit" className="btn btn-green">
                        Save
                    </button>
                    <NavLink to="/contacts" className="btn btn-red">
                        Cancel
                    </NavLink>
                </div>
            </form>
        </div>
    )
}

export default PhoneInput
