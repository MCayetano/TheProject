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
    getCars: async (req, res) => {
        const db = req.app.get('db');
        let inventory = await db.cars.get_cars();
        res.status(200).send(inventory)
    },

    soldCars: async (req, res) => {
        const {id} = req.params;

        

        const db = req.app.get('db');
        let carDelete = await db.cars.delete_car([id]);
        if(carDelete){
            let updatedCarList = await db.cars.get_cars();
            res.status(200).send(updatedCarList)
        }
        res.status(200).send("Car Deleted");
    },

    createVehicle: async (req, res) => {
        const db = req.app.get('db');
        const {make, model, year, description, price} = req.body
        let newCar = {
            price,
            make,
            model,
            year,
            description,
            image
        }
        
        let vehicleCreated = await db.cars.add_car([price, make, model, year, description, image]);
        if(vehicleCreated){
            let updatedCarList = await db.cars.get_cars();
            res.status(200).send(updatedCarList)
        }
        res.status(200).send(vehicleCreated)
    },

    updatePrice: async (req, res) => {
        const db = req.app.get('db');
        let { id } = req.params;
        let { price } = req.body;
        
        // let index = inventory.findIndex(elem => {
        //     return +elem.id === +id
        // })

        // let curCar = inventory[index];

        // let newCar = {
        //     id: curCar.id,
        //     price: req.body.price,
        //     make: curCar.make,
        //     model: curCar.model,
        //     year: curCar.year,
        //     description: curCar.description
        // }
        // inventory.splice(index, 1, newCar)

    

          let attemptUpdate =  await db.cars.update_price([id, price.toString()]);
            if(attemptUpdate){
                let updatedCarList = await db.cars.get_cars();
                res.status(200).send(updatedCarList)
            } 
       
    }




}