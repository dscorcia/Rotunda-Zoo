# Rotunda Challenge

## Zoo Exercise:
We are building a zoo inside a computer. Each animal species in our zoo has lots of different, particular, behaviors, but all animals talk to each other in a similar way. Specifically, they all implement a speak method, the output of which is the arbitrary input string interspersed with an "animal sound" that is particular to that type of animal.

* For example, the lion's speak function behaves like so:

    ``` >lion.speak( "I'm a lion" ); ```

    ``` < "I'm roar a roar lion roar" ```

* The tiger's speak function behaves similarly but with a different sound:
    
    ``` > tiger.speak( "Lions suck" ); ```
    
    ``` < "Lions grrr suck grrr" ```

Please write logic and classes to support our zoo in JavaScript (using whatever
class model you like) with attention to code structure and readability.

# How to run the project
 * 1. First of all, please clone the or download the project from the repository.
 * 2. Move to the path where you clone/download the project:
    `` cd Challenge-Rotunda-Zoo``
 * 3. Install NPM dependencies:
    `` npm i  ``
 * 4. Run the project:
    `` npm run start ``

# Comments
* I used abstract class to force child classes to implement speak method.