export const getAccessToken = () => {
    const ac = localStorage.getItem('ACCESSTOKEN')
    return ac
}


export const getItem = (item: string) => {
    if(localStorage.getItem(item)) {
        return JSON.parse(localStorage.getItem(item))
    } else {
        return undefined
    }
}
