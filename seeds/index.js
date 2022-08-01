//tracks or saves user data, kind of like local storage//
const sequelize = require('../config/connection');
const seedFavorites = require('./favoritedata');
const seedProfile = require('./profiledata');
const seedTables = require('./tabledata');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedProfile();

    await seedTables();

    await seedFavorites();
    
    process.exit(0);
};

seedDatabase();