export type DanhSach= {
    members : [{name: string}],
    userId : number,
    name : string,
    avatar : string,
    creator: {
        name: string
    },
    id: number,
    projectName:string,
    description : string,
    categoryId: number,
    categoryName: string,
    alias: string,
    deleted : boolean,
}
