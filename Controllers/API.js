const router = require('express').Router();
const db = require('../Config/Database');
const Store = require('../Models/Data');
const Users = require('../Models/Users');


router.post('/delete', (req, res) =>{
	const token = req.header('token');
	const id = req.body('id');
	
	if(token){
		Users.findOne({
			where:{token},
		})
		.then((dt)=>{
			if(dt){
		Store.destroy({
			where: {id}
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
		res.send('Provide an ID and a token')
	}
})

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

//Eid Mubarak
module.exports = router;