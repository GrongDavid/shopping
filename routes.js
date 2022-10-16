const express = require('express');
const router = new express.Router();

let shoppingList = [
    {
        name: 'toothbrush',
        price: 1.99
    },
    {
        name: 'xbox',
        price: 299
    }

];

router.get('/', function(req, res){
    let list = {};

    if(shoppingList.length === 0) return res.send('No items in shopping list')

    res.json(shoppingList);
})

router.post('/', function(req, res){
    const {name, price} = req.body;
    const newItem = {name, price};

    shoppingList.push(newItem);

    return res.send(`Added ${newItem} to shopping list`);
})

router.get('/:name', function(req, res){
    let itemName = req.params.name;
    shoppingList.forEach((item => {
        if(item.name === itemName){
            res.json(item);
        }
    }))
    return res.send('Couldnt find item');
})

router.patch('/:name', function(req, res){
    let itemName = req.params.name;
    shoppingList.forEach((item => {
        if(item.name === itemName){
            item.name = req.body.name;
            item.price = req.body.price;
        }
        else return res.send('Couldnt find item to update')
    }))
    return res.send(`Item ${itemName} has been successfully updated`)
})

router.delete('/:name', function(req, res){
    let itemName = req.params.name;
    shoppingList.forEach((item, idx => {
        if(item.name === itemName){
            shoppingList.splice(idx, 1);
        }
        else return res.send('Couldnt find item to remove')
    }))
    return res.send(`Item ${itemName} has been successfully removed`)
})

module.exports = router