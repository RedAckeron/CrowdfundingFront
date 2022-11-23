export class Link {
    title : string;
    MinRole:number;
    url? : string;
    children? : Link[];
    isVisible? : boolean;
    
    constructor(title : string,MinRole:number, url? : string, children? : Link[], isVisible? : boolean){
        this.title = title;
        this.MinRole=MinRole;
        this.url = url;
        this.children = children;
        this.isVisible = isVisible;
    }
}