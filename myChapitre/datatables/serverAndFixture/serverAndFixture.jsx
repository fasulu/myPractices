const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose");
const app = express()

const { uniqueNamesGenerator, names, languages, colors, countries } = require("unique-names-generator");

const persons = [];

var temp;

for (let i = 0; i < 9; i++) {

    persons.push({
        firstname: uniqueNamesGenerator({ dictionaries: [names] }),
        surname: uniqueNamesGenerator({ dictionaries: [names] }),   
        address: uniqueNamesGenerator({ dictionaries: [languages] }),
        road: uniqueNamesGenerator({ dictionaries: [colors] }) + " Road",   
        countries: uniqueNamesGenerator({ dictionaries: [countries] }),
    });
}

mongoose.connect("mongodb://localhost:27017/datatables", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
});

const personSchema = new mongoose.Schema({
    firstname: { type: String, unique: true },
    surname: { type: String , unique: true},
    address: { type: String },
    road: { type: String},
    countries: { type: String }
})

const Person = mongoose.model("Person", personSchema)

const port = 9002
app.use(express.json())
app.use(cors())

app.get("/addressList", async (req, res) => {
    
    try {
        console.log("Im in addresList", req.body)

        const addressList = await Person.find().lean();

        console.log(addressList);

        res.json({addressList})
        
    } catch (error) {
        
    }
})

const deletedAllThenAdd = async () => {
    try {
        await Person.deleteMany({})

        console.log("All deleted")

        const dataAdded = await Person.insertMany(persons)

        console.log("OK, ", dataAdded);

        const result = await Person.aggregate([
            {
                $group: {
                    _id: "$address",
                    num: { $sum: 1 }
                }
            },
            {
                $match: {
                    num: { $gt: 1 }
                }
            }
        ])

        console.log(result.length ? "There are repeated address!!" : "No repeated address")

        // await mongoose.disconnect()

        // console.log("disconnected ok")

    } catch (error) {
        console.log(error)
    }
}


// deletedAllThenAdd();

const addressList = (async (req, res) => { 
    
    try {
        console.log("Im in addresList", req.body)
        
    } catch (error) {
        
    }
})


app.listen(port, () => {
    console.log(`Connected through port ${port}`);
})