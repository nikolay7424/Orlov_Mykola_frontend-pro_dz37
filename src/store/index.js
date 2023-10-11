import { createSlice, configureStore } from "@reduxjs/toolkit"

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        phone: "+380671234567",
    },
    {
        firstName: "Elizabeth",
        lastName: "Smith",
        phone: "+380501234567",
    },
]

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: users,
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
    },
})

const usersReducer = usersSlice.reducer

const store = configureStore({
    reducer: {
        users: usersReducer,
    },
})

export const usersActions = usersSlice.actions
export default store
