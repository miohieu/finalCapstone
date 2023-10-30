import { createAsyncThunk } from '@reduxjs/toolkit'
import {  userService } from 'services'
import {  sleep } from 'utils'
import { User } from 'types'
import { RegisterType } from 'schema/RegisterSchema'

export const loginThunk = createAsyncThunk(
    'userService/login',
    async (payload: User, { rejectWithValue }) => { try {
            const data = await userService.login(payload)
            await sleep(2000)

            console.log(data, "fetch thanh cong")
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
export const registerThunk = createAsyncThunk(
    'userService/register',
    async (payload: RegisterType, { rejectWithValue }) => {
        try {
            const data = await userService.register(payload)
            await sleep(2000)

            console.log(data, "fetch thanh cong")
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)




