import { createSlice } from '@reduxjs/toolkit'
import { getAccessToken } from 'utils'
import { loginThunk } from '.'
import { User } from 'types'
type userAuth = {
    accessToken?: string
    user?: User,
    isLogin: boolean
}

const initialState: userAuth = {
    accessToken: getAccessToken(),
    isLogin: false
}

const userAuthSlice = createSlice({
    name: 'usersAuth',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                console.log('payload: ', payload)
                // lưu accessToken xuống localstorage
                localStorage.setItem('ACCESSTOKEN', payload.accessToken)
                const token = state.accessToken = payload.accessToken
                if (token) { 
                    state.isLogin = true 
                    state.user = payload
                }
                
            })

    },
})

export const { actions: userAuthActions, reducer: userAuthReducer } = userAuthSlice

