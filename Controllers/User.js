const router = require('express').Router();
const db = require('../Config/Database');
// const Store = require('../Models/Data');
const Users = require('../Models/Users');


router.get('/', (req, res) =>{
	const token = req.header('token');

	if(token){
		Users.findOne({
			where:{email:token}
		})
		.then((dt)=>{
			res.json(dt);
		})
		.catch(err=>console.error(err))
	}else{
		res.send('Provide a valid token')
	}
})

router.post('/add', (req,res)=>{
	const name = req.body.name;
	const email = req.body.email;
	
	if(email){
		Users.create({
			name,
			email
		}, { fields: ['name','email','token']})
		.then((data => {
			res.json(data);
		}))
		.catch(err=>console.error(err))
	}else{
		res.send('Provide correct email')
	}
})

//Eid Mubarak
module.exports = router;