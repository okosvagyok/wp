const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware-ek beállítása
app.use(cors());
app.use(bodyParser.json());



// GET kérés kezelése (összes autó lekérdezése)
app.get('/cars', (req, res) => {
    fs.readFile('cars.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const cars = JSON.parse(data);
        res.json(cars);
    });
});


// POST kérés kezelése (új autó hozzáadása)
app.post('/cars', (req, res) => {
    const newCar = req.body;

    fs.readFile('cars.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const cars = JSON.parse(data);
        newCar.id = cars.length + 1;
        cars.push(newCar);

        fs.writeFile('cars.json', JSON.stringify(cars), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
                return;
            }

            res.json(newCar);
        });
    });
});

// PUT kérés kezelése (autó frissítése)
app.put('/cars/:id', (req, res) => {
    const carId = parseInt(req.params.id);
    const updatedCar = req.body;

    fs.readFile('cars.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const cars = JSON.parse(data);
        const existingCar = cars.find(car => car.id === carId);

        if (!existingCar) {
            res.status(404).send('Car not found');
            return;
        }

        // Frissítsd az autó adatait
        existingCar.brand = updatedCar.brand;
        existingCar.model = updatedCar.model;
        existingCar.engineSize = updatedCar.engineSize;

        fs.writeFile('cars.json', JSON.stringify(cars), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
                return;
            }

            res.json(existingCar);
        });
    });
});



// Szerver indítása
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
