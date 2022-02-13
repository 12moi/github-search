export class Repos {
    static results:any;
    constructor(public name:string, public url:string, public login:string, public location:string, public public_repos:number, private clientId:number, private clientSecret:string,  public followers:number, public  following:number, public  created_at:Date){

    }
}
