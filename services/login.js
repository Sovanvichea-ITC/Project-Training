const { readUser,writeUser } = require('../mydata/mydb');


const login = async (email, password) => {
    
    const users = await readUser();

    var a = 0;
   
    if (!email || !password) {
        return {
            "sucess": "false",
            "message": "Please complete your login!"
        }
    } else {
        for (let user in users) {
            if (users[user].email == email) {    
                if (users[user].password == password) {
                    a = 1;
                }
                
            } 
        }
    }

    if (a == 0) {
         return {
            "sucess": "false",
            "message": "Incorrect Email and Password"
            }    
    } else {
        return {
            "sucess": "true",
            "message": "You are login sucess!"
        }
        
    }




}

module.exports = {
    login,
}