export class Link {
    title : string;
    url? : string;
    children? : Link[];
    isVisible? : boolean;

    constructor(title : string, url? : string, children? : Link[], isVisible? : boolean){
        this.title = title;
        this.url = url;
        this.children = children;
        this.isVisible = isVisible;
    }
}