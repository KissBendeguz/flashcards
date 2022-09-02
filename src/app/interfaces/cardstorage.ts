export interface CardStorage {
    language: string,
    cards: {
        [dynamic:string]: {
            //id:string,
            title: string,
            asked: number,
            success: number,
            created: string,
            questions: Array<Array<string>>
        }
    }
}
