const { Table } = require('../models');

const tableData = [
    {
        "physical_rating": 2,
        "emotional_rating": 3,
        "spiritual_rating": 6,
        "mental_rating": 8,
        "social_rating": 9,
        "overall_rating": 7,
        "user_id": 1,
    },
    {
        "physical_rating": 4,
        "emotional_rating": 6,
        "spiritual_rating": 9,
        "mental_rating": 2,
        "social_rating": 1,
        "overall_rating": 5,
        "user_id": 1
    },
    {
        "physical_rating": 3,
        "emotional_rating": 4,
        "spiritual_rating": 5,
        "mental_rating": 6,
        "social_rating": 7,
        "overall_rating": 5,
        "user_id": 2,
    },
    {
        "physical_rating": 4,
        "emotional_rating": 9,
        "spiritual_rating": 10,
        "mental_rating": 8,
        "social_rating": 9,
        "overall_rating": 8,
        "user_id": 2
    },
    {
        "physical_rating": 3,
        "emotional_rating": 4,
        "spiritual_rating": 4,
        "mental_rating": 3,
        "social_rating": 4,
        "overall_rating": 4,
        "user_id": 3
    }
];

const seedTables = () => Table.bulkCreate(tableData);

module.exports = seedTables;