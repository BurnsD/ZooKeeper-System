const express = require('express');
const app = express();

const { animals } = require('./data/animals');

// Allows Filter functionality through filterByQuery
function filterByQuery(query, animalsArray) {
    let filteredResults = animalsArray;
    if (query.diet) {
      filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if (query.species) {
      filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if (query.name) {
      filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    return filteredResults;
  }

// New get request for animals calling filterByQuery
app.get('/api/animals', (req, res) => {
    let results = animals;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });

// Get request for animals, sends json
/*
app.get('/api/animals', (req, res) => {
    res.json(animals);
  });
*/

// Listen method 
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });