import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import PhoneBook from "./components/PhoneBook"
import PhoneInput from "./components/PhoneInput"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector"

function App() {
    const userArr = useSelector((state) => state.users.users)

    const [userIndex, setUserIndex] = useState(0)

    return (
        <Router>
            <div className="container">
                <Navbar />
                <div className="content-wrapper">
                    <Routes>
                        <Route
                            path="/contacts"
                            element={
                                <PhoneBook
                                    userArr={userArr}
                                    userIndex={userIndex}
                                    setUserIndex={setUserIndex}
                                />
                            }
                        ></Route>
                        <Route
                            path="/add"
                            element={<PhoneInput userArr={userArr} />}
                        ></Route>
                        <Route
                            path="/edit/:id"
                            element={
                                <PhoneInput
                                    userArr={userArr}
                                    isEdit={true}
                                    userIndex={userIndex}
                                />
                            }
                        ></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App
