module.exports = (Sequelize, config) => {
	console.log(config);
	const options = {
		host: config.host,
		logging: false,
		dialect: config.dialect,
		port: config.port,
	};
	const sequelize = new Sequelize(config.db, config.login, config.password, options);

	const agent = require('../db/models/agent');
	const person = require('../db/models/person');
	const food = require('../db/models/food');
	const ingestion = require('../db/models/ingestion');

	const Agent = agent(Sequelize, sequelize);
  const Food = food(Sequelize, sequelize);
  const Person = person(Sequelize, sequelize);
  const Ingestion = ingestion(Sequelize, sequelize);

  Ingestion.belongsTo(Agent);
  Ingestion.belongsTo(Food);
  Ingestion.belongsTo(Person);

  Person.hasMany(Ingestion);
  Food.hasMany(Ingestion);
  Agent.hasMany(Ingestion);

  // Tweet.belongsToMany(User, {as: 'Likes', through: Like, otherKey: 'authorId', foreignKey: 'tweetId'});
  //
  // User.hasMany(Tweet, {foreignKey: 'authorId'});
  // Tweet.belongsTo(User, {foreignKey: 'authorId', as: 'author'});

  return {
    Agent,
    Food,
    Person,
    Ingestion,
    sequelize,
    Sequelize
  };
};
