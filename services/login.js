const { readUser,writeUser } = require('../mydata/mydb');


const login = (email, password) => {
    
    const users = readUser();
    console.log(users);
    let data = {email, password}
    writeUser(data)
}

module.exports = {
    login,
}