import { isAxiosError } from 'axios'
import { toast } from 'react-toastify'

/**
 *
 * @param error - `any`
 * @param message - `string`
 * @description Show toast message or error
 */

export const handleError = (error?: Error, message?: string) => {
    if (isAxiosError<{ message: string }>(error)) {
        toast.error( message || error?.response?.data.message)
    }
}

