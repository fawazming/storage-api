const router = require('express').Router();
const db = require('../Config/Database');
const Store = require('../Models/Data');
const Users = require('../Models/Users');


router.get('/delete/:token/:id', (req, res) =>{
	if(req.params.token){
		Users.findOne({
			where:{token: req.params.token},
		})
		.then((dt)=>{
			if(dt){
		Store.destroy({
			where: { id: req.params.id },
			force: false
		 })
		.then((data => {
			res.json(data);
		}))
		.catch(err=>console.error(err))
			}else{
				res.send('Provide correct token at /token/id')
			}
		})
		.catch(err=>console.error(err))
	}else{
		res.send('Provide an ID and token at /token/id')
	}
})

//Hey there its April 29, 2022. TGIF Jumah Mubarak! The last friday in Ramadan 1443AH

router.get('/', (req, res) =>{
	const token = req.header('token');

	if(token){
		Store.findAll({
			where:{token}
		 })
		.then((data => {
			res.json(data);
		}))
		.catch(err=>console.error(err))
	}else{
		res.send('Provide a token header')
	}
})

router.get('/:id', (req, res) =>{
	const token = req.header('token');

	if(token){
		Users.findOne({
			where:{token}
		})
		.then((dt)=>{
			if(dt){
		Store.findOne({
			where:{id: req.params.id}
		})
		.then((data => {
			res.json(data);
		}))
		.catch(err=>console.error(err))
			}else{
				res.send('Provide correct token header')
			}
		})
		.catch(err=>console.error(err))
	}else{
		res.send('Provide an ID and correct token header')
	}
})

router.post('/add', (req,res)=>{
	const name = req.body.name;
	const value = req.body.value;
	const token = req.header('token')? req.header('token') : req.body.token;
	
	if(token){
		Users.findOne({
			where:{token},
		})
		.then((dt)=>{
			if(dt){
		Store.create({
			name,
			value,
			token
		}, { fields: ['name','value','token']})
		.then((data => {
			res.json(data);
		}))
		.catch(err=>console.error(err))
			}else{
				res.send('Provide correct token')
			}
		})
		.catch(err=>console.error(err))
	}else{
		res.send('Provide an ID and token')
	}
})

router.get('/contact', (req, res) =>{
	res.send('Contact Us')
})

module.exports = router;