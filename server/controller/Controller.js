// let id = 4;

// let inventory = [
//     {
//         id: 0,
//         price: '$119,995',
//         make: 'Bentley',
//         model: 'Continental',
//         year: 2015,
//         description: "Elegant vehicle with Navigation, Rear-View Camera, Bang-Olufsen Sound System",
//         image: "https://www.manhattanmotorcars.com/images/2015_Bentley_Continental_PO2690_5.jpg"


//     },

//     {
//         id: 1,
//         price: '$499,000',
//         make: 'Lamborghini',
//         model: 'Aventador SRoadster',
//         year: 2019,
//         description: "Rear-view Camera, Premium Sound System, ",
//         image:"https://www.manhattanmotorcars.com/images/2019_Lamborghini_Aventador_191006_2.jpg"
//     },
    
//     {
//         id: 2,
//         price: '$119,995',
//         make: 'Bentley',
//         model: 'Continental GT V8',
//         year:   2015,
//         description: "",
//         image: "https://www.manhattanmotorcars.com/images/2015_Bentley_Continental_PO2690_5.jpg"
//     },

//     {
//         id: 3,
//         price: '$378,500',
//         make: 'Lamborghini',
//         model: 'Aventador Roadster',
//         year: 2015,
//         description: "CAR IS IN THE WASH BAY, CARLOS HAS THE KEYS",
//         image: "https://www.manhattanmotorcars.com/images/2017_Lamborghini_Aventador_PO1959_2.jpg"

//     }
// ]

module.exports = {
    getCars: (req, response) => {
        response.status(200).send(inventory)
    },

    soldCars: (req, res) => {
        const {id} = req.params;
        console.log('paramies', req.params);
        let newInventory = inventory.filter(car => {
            console.log('car.id', car.id);
            console.log('id', id);
            if(car.id !== +id) {
                return car;
            }
        })
        
        res.status(200).send(newInventory);
    },

    createVehicle: (req, res) => {
        const {make, model, year, description, price} = req.body
        let newCar = {
            id: id++,
            price,
            make,
            model,
            year,
            description
        }
        inventory.push(newCar)
        res.status(200).send(inventory)
    },

    updatePrice: (req, res) => {
        let { id } = req.params;

        let index = inventory.findIndex(elem => {
            return +elem.id === +id
        })

        let curCar = inventory[index];

        let newCar = {
            id: curCar.id,
            price: req.body.price,
            make: curCar.make,
            model: curCar.model,
            year: curCar.year,
            description: curCar.description
        }
        inventory.splice(index, 1, newCar)
        res.status(200).send(inventory)
    }




}