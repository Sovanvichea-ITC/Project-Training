const { readUser, writeUser } = require('../mydata/mydb');


const register = async(data) =>{
    
   const { firstname, lastname, email, password } = data;

    const users = await readUser();
    
    var a = 0;

    if (!firstname || !lastname || !email || !password) {
        a = 1;

        return {
            "sucess": "false",
            "message": "Please check with your INFO!"
        };
        

    } else {
        for (let user in users) {
            if (users[user].email == data.email) {

                a = 1;
               
                return {
                    "sucess": "false",
                    "message": "Your email is already existed!"
                };

            }
        }
    }
    
    if (a == 0) {
        users.push(data);
        writeUser(users);
        return {
            "sucess": "true",
            "message": "Sucessful for register!"
        }
    }
    console.log(users);

}

module.exports = {
    register,
}