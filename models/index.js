const Profile = require('./profile');
const Favorites = require('./favorites');
const Table = require('./table');

Profile.hasMany(Table, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Table.belongsTo(Profile, {
  foreignKey: 'user_id'
});

Profile.hasMany(Favorites, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Favorites.belongsTo(Profile, {
  foreignKey: 'user_id'
});


module.exports = { Profile, Favorites, Table };
