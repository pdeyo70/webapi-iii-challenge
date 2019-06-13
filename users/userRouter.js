const express = require('express');

const Users = require('./userDb.js');

const router = express.Router();

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', async (req, res) => {
    try {
        const users = await Users.get(req.users);
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error getting users." })
    }
});

router.get('/:id', (req, res) => {
    Users.getById(req.params.id)
        .then(user => {
            if (user) {
                res.status(200).json({
                    user
                })
            } else {
                res.status(404).json({
                    message: "We cannot find the user you're looking for."
                })
            }
        })
        .catch (err => {
                res.status(500).json({ err })
            })
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
