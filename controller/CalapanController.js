const paris = require('../model/ParisModel');
const ty = {
    index:(req, res) => {
        res.render('index');
    },
    save:(req, res)=> {
        const data = req.body;
        paris.save(data, (err) =>{
            if(err)throw err;
            res.redirect('/');
        })
    }
};
module.exports = ty;