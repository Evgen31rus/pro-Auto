export interface IDropList { 
    title: string[]; 
}

export interface IDropDown { 
    dropDown: IDropList[]; 
}

export interface IBackendItem { 
    menu: string[]; 
    dropDown: IDropList[]; 
}
