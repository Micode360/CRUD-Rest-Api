const router = require('express').Router();
let userModel = require('../model/user.model');



/*READ*/
router.route('/data').get((req,res)=>{
    userModel.find() 
    .then(data => res.json(data.map((i)=>{
            const data = {
                id:  i.id,
                name: i.name,
                description: i.description
            }
            return data;
    })))
    .catch(err => res.status(400).json('Error: ' + err));
});

/*ADD*/
router.route('/add').post((req,res)=>{
    const name = req.body.name;
    const description = req.body.description;

    const newUserData = new userModel({
       name,
       description 
    });

    newUserData.save()
    .then(()=> res.json('user added'))
    .catch(err => res.status(400).json('Error'+ err));
});


/*UPDATE*/
router.route('/update').post((req,res)=>{
    userModel.findById(req.params.id)
    .then(data => {
        data.name = req.body.name;
        data.description = req.body.description;

        data.save()
        .then(()=> res.json('user updated'))
        .catch(err => res.status(400).json('Error'+ err));
    })

    .catch(err => res.status(400).json('Error'+ err));
});


/*DELETE*/
router.route((req,res)=>{
    userModel.findByIdAndDelete(req.params.id)
    .then(()=>res.json('File has benn deleted'))
    .catch(err => res.status(400).json('Error'+ err));
});




module.exports = router;