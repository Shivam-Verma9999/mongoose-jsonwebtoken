// for mimicking the real bcrypt module
// TODO: resolve this problem.

export class bcrypt{

    /*
    * @param (pass) its the password received from user
    * @return return the pass received in the function
    * */
    static hashSync(pass, num){
        return pass;
    }
    /*
    * @param (pass) its the password received from user
    * @param (hashPass)  hashedPassword
    * @return return true if pass and hashPass are equal
    * */
    static compareSync(pass, hashPass){
        return pass === hashPass;
    }

}
