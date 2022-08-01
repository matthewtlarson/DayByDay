const Profile = require('./profile');
const Favorites = require('./favorites');
const Table = require('./table');

Profile.hasOne(Table, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Table.belongsTo(Profile, {
  foreignKey: 'id'
});

Profile.hasOne(Favorites, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Favorites.belongsTo(Profile, {
  foreignKey: 'id'
});


module.exports = { Profile, Favorites, Table };
