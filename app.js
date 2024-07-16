const express = require('express');
const app = express();
const port = 3000;

// Dummy data
const hotels = [
    { id: 1, name: 'Hotel One', location: 'City A' }
];

const restaurants = [
    { id: 1, name: 'Restaurant One', cuisine: 'Italian' }
];

const flights = [
    { id: 1, airline: 'Airline One', destination: 'City C' }
];

const attractions = [
    { id: 1, name: 'Attraction One', type: 'Museum' }
];

const transportation = [
    { id: 1, type: 'Taxi', availability: '24/7' }
];

// Define routes
app.get('/hotels', (req, res) => {
    res.json(hotels);
});

app.get('/restaurants', (req, res) => {
    res.json(restaurants);
});

app.get('/flights', (req, res) => {
    res.json(flights);
});

app.get('/attractions', (req, res) => {
    res.json(attractions);
});

app.get('/transportation', (req, res) => {
    res.json(transportation);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
