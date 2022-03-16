const fs = require('fs');
const path = require('path');


const readUser = () => {
    let rawdata = fs.readFileSync(path.join(process.cwd(), 'mydata/userlogin.json'), 'utf8');
    if (!rawdata) {
        return []
    }
    return JSON.parse(rawdata);
}

const writeUser = (data) => {
    fs.writeFileSync(path.join(process.cwd(), 'mydata/userlogin.json'), JSON.stringify(data), 'utf8');
}

module.exports = {
    readUser,
    writeUser
}