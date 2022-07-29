const Profile = require('./profile');
const Favorites = require('./favorites');
const Table = require('./table');

Profile.hasOne(Tables, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Tables.belongs(Profile, {
  foreignKey: 'id'
});

Profile.hasOne(Favorites, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Favorites.belongs(Profile, {
  foreignKey: 'id'
});


module.exports = { Profile, Favorites, Table };