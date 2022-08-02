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
        "user_id": 2
    },
    {
        "author": "Maatma Ghandi",
        "quote": "That which doesn't kill us makes us stronger.",
        "user_id": 3
    },
    {
        "author": "John Lennon",
        "quote": "Life is what happens when you're busy making other plans.",
        "user_id": 4
    },
    {
        "author": "Joe Kennedy",
        "quote": "When the going gets tough, the tough get going.",
        "user_id": 5
    },
    {
        "author": "Mahatma Gandhi",
        "quote": "You must be the change you wish to see in the world.",
        "user_id": 1
    },
    {
        "author": "Walt Disney",
        "quote": "All our dreams can come true, if we have the courage to pursue them.",
        "user_id": 2
    },
    {
        "author": "Mark Twain",
        "quote": "The secret of getting ahead is getting started.",
        "user_id": 4
    },
    {
        "author": "Michael Jordan",
        "quote": "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life, and that is why I succeed.",
        "user_id": 3
    },
    {
        "author": "Mary Kay Ash",
        "quote": "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
        "user_id": 5
    },
    {
        "author": "Chinese Proverb",
        "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
        "user_id": 1
    },
    {
        "author": "Babe Ruth",
        "quote": "It’s hard to beat a person who never gives up.",
        "user_id": 2
    },
    {
        "author": "Leah Busque",
        "quote": "I wake up every morning and think to myself, ‘How far can I push this company in the next 24 hours.",
        "user_id": 3
    },
    {
        "author": "Andy Grove",
        "quote": "Only the paranoid survive.",
        "user_id": 4
    },
    {
        "author": "Michele Ruiz",
        "quote": "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
        "user_id": 5
    },
    {
        "author": "Arianna Huffington",
        "quote": "We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes―understanding that failure is not the opposite of success, it’s part of success.",
        "user_id": 3
    },
    {
        "author": "Joss Whedon",
        "quote": "Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE.",
        "user_id": 2
    },
    {
        "author": "William W. Purkey",
        "quote": "You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.",
        "user_id": 3
    },
    {
        "author": "Neil Gaiman",
        "quote": "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
        "user_id": 4
    },
    {
        "author": "Pablo Picasso",
        "quote": "Everything you can imagine is real.",
        "user_id": 5
    },
    {
        "author": "Helen Keller",
        "quote": "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        "user_id": 1
    },
    {
        "author": "Eleanor Roosevelt",
        "quote": "Do one thing every day that scares you.",
        "user_id": 2
    },
    {
        "author": "Lewis Carroll",
        "quote": "It’s no use going back to yesterday, because I was a different person then.",
        "user_id": 3
    },
    {
        "author": "Socrates ",
        "quote": "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.",
        "user_id": 4
    },
    {
        "author": "Dalai Lama XIV",
        "quote": "Happiness is not something ready made. It comes from your own actions.",
        "user_id": 5
    }
];

const seedFavorites = () => Favorites.bulkCreate(favdata);

module.exports = seedFavorites;