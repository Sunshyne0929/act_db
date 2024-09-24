const db= require('../config/db');

const md ={
    save:(data, callback) =>{
        const q = "insert into ts (lastname, firstname, email, gender) value (?,?,?,?)";
        db.query(q, [data.lastname, data.firstname, data.email, data.gender], callback);

    }
}
module.exports = md;