import { Animal } from "./animal";

export class Tiger extends Animal{
    sound:string = 'grr';
    
    speak(inputString:string):string{
        return inputString.split(" ").join(` ${this.sound} `);
    }
}

