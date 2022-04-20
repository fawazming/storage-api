const db = require('../Config/Database');
const Gig = require('../Models/Sample');

exports.index = (req, res) =>{
	res.render('home',{layout: false});
}

exports.contact = (req, res) =>{
	Gig.findAll({where:{id:99}})
		.then((gigs => {
			console.log(gigs);
		}))
		.catch(err=>console.error(err))
	res.send('Contact Us')
}