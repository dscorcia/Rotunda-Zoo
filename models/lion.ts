import { Animal } from "./animal";

export class Lion extends Animal{
    sound:string = 'roar';

    speak(inputString:string):string{
        return inputString.split(" ").join(` ${this.sound} `);
    }
}

