const { Favorites } = require('../models');

const favdata = [
    {
        "author": "Wayne Gretzky",
        "quote": "You miss a 100% of the shots you don't take.",
        "user_id": 1
    },
    {
        "author": "Lao Zhu",
        "quote": "The journey of a thousand miles begins with one step.",
        "user_id": 1
    },
    {
        "author": "That which doesn't kill us makes us stronger.",
        "quote": "Friedrish Nietzsche",
        "user_id": 1
    },
    {
        "author": "John Lennon",
        "quote": "Life is what happens when you're busy making other plans.",
        "user_id": 3
    },
    {
        "author": "Joe Kennedy",
        "quote": "When the going gets tough, the tough get going.",
        "user_id": 3
    },
    {
        "author": "Mahatma Gandhi",
        "quote": "You must be the change you wish to see in the world.",
        "user_id": 4
    }
];

const seedFavorites = () => Favorites.bulkCreate(favdata);

module.exports = seedFavorites;