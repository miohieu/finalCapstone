import { createSlice } from '@reduxjs/toolkit'
import { getAccessToken, getItem } from 'utils'
import { loginThunk, registerThunk } from '.'
import { PayloadAction } from '@reduxjs/toolkit'
import { User } from 'types'
import { toast } from "react-toastify"

type userAuth = {
    accessToken?: string
    user?: User,
}

const initialState: userAuth = {
    accessToken: getAccessToken(),
    user: getItem("CURRUSER")

}

const userAuthSlice = createSlice({
    name: 'usersAuth',
    initialState,
    reducers: {
        logOut: (state, { payload }: PayloadAction<string>) => {
            console.log('action: ', payload)
            state.accessToken = undefined
            state.user = undefined
            localStorage.removeItem('ACCESSTOKEN')
            localStorage.removeItem('CURRUSER')
        }
    },
    extraReducers(builder) {
        builder
            .addCase(loginThunk.fulfilled, (state, { payload }) => {

                localStorage.setItem('ACCESSTOKEN', payload.accessToken)
                const token = state.accessToken = payload.accessToken

                if (token) {
                    state.user = payload
                }

            })
            .addCase(loginThunk.pending, (_, { payload }) => {
                toast.warning("Vui long doi")

            })
            .addCase(registerThunk.fulfilled, (_, { payload }) => {
                console.log(payload)
            })

    },
})

export const { actions: userAuthActions, reducer: userAuthReducer } = userAuthSlice

