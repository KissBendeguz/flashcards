export class Game {
    readonly id: string;
    questions: Map<string,string>|undefined;


    constructor(id:string,questions?:Map<string,string>){
        this.id = id;
        this.questions = questions;
    }


    public isValidInstance():boolean{
        if(this.questions===undefined){
            return false;
        }
        if(this.questions.size<1){
            return false
        }
        return true;
        //return this.questions!==undefined && this.questions.size>0
    }

    public isRightAnswer(index:number,answer:string){
        if(!this.isValidInstance()){
            return false;
        }
        if(this.questions!.get(Array.from(this.questions!.keys())[index]) !== answer){
            return false;
        }
        
        return true;
        //return this.questions!.get(Array.from(this.questions!.keys())[index]) === answer && this.isValidInstance();
    }

}
