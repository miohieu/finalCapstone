import { DanhSach } from "types/getDanhSach"
export const findMe = (array: DanhSach[], myName: string) => {
    const myProject = []
    for(let i = 0; i< array.length; i++) {
        if(array[i].creator.name === myName) {
            myProject.push(array[i])
        }
    }
    return myProject
}
