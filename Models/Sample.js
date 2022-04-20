const Sequelize = require('sequelize');
const db = require('../Config/Database');


// Testing DB Connection
// db.authenticate()
//   .then(()=>{console.log('DB connected')})
//   .catch(err=>console.error(err))

const Gig = db.define('qbank', {
	// Model attribute
	question: {
		type: Sequelize.STRING,
		// type: Sequelize.STRING|.TEXT|.BOOLEAN|.INTEGER|.BIGINT|.FLOAT|.DOUBLE|.DECIMAL|.DATETIME|.DATEONLY|.UUID,
		// defaultValue: null | "Who" | Sequelize.NOW | Sequelize.UUIDV4
	}
},{
	// Sequelize options
	freezeTableName: true,
	// tableName: 'Employees',
	paranoid: false,
	createdAt: 'created_at',
	updatedAt: 'updated_at',
	deletedAt: 'deleted_at',
})

// `subject`, `qid`, `question`, `opta`, `optb`, `optc`, `optd`, `section`, `image`, `answer`, `solution`, `examtype`, `examyear`,


// To utilise, follow:
// const db = require('../Config/Database');
// const Gig = require('../Models/Sample');

// Gig.findAll({
// 	where:{id:99},
// 	paranoid: true,
// 	limit: 10,
// 	offset: 0,
// })
// Gig.findOne({
// 	where:{id:99},
// 	paranoid: true,
// })
// Others Include:
// Model.create({
// 	object of data to save
// })
// Model.update({
// 	object of data to update
// },{
// 	where: {},
// 	paranoid: false,
// 	fields: [],
// })
// Model.destroy({
// 	where: { },
//  force: false // Delete instead of setting deletedAt to current timestamp
// })
// 		.then((gigs => {
// 			console.log(gigs);
// 		}))
// 		.catch(err=>console.error(err))
module.exports = Gig;