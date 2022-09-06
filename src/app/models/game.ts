export class Game {
    readonly id: number;
    questions: Map<string,string>|undefined;


    constructor(id:number,questions?:Map<string,string>){
        this.id = id;
        this.questions = questions;
    }


    public isValidInstance():boolean{
        if(this.questions!==undefined){
            if(this.questions.size>0){
                return true;
            }
        }
        return false;
    }

    /*public isRightAnswer():boolean{
        if(){

        }
        return false;
    }*/

}
