const {MongoClient} = require('mongodb');
const express = require('express');
const url = 'mongodb://localhost:27017'; // Location of the database
const client = new MongoClient(url); // Create a new MongoClient 
const databaseName = 'TaskManger'; // Name of the database
async function getData(){
    let result =client.connect();
    // the result is a promise
    // it takes time for the data to be fetched from the database
    // so we can use the await keyword to wait for the promise to resolve
    let db = result.db('TaskManger'); // Get the database  name
    let collection = db.collection('tasks'); // Get the collection
    let results = await collection.find({}).toArray(); // Get all the documents , await handles the promise , converts resluts to Array
    console.log(results);
}
