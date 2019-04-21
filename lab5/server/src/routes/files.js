const express = require('express');
const router = express.Router();

const File = require('../models/file-model');

router.post('/files', (req, res) => {
    const file = new File({
        title: req.body.title,
        description: req.body.description
    });

    file.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send({
                success: true,
                message: `Post with ID_${data._id} saved successfully!`
            });
        }
    });
});

router.get('/files', (req, res) => {
    File.find({}, 'title description', (err, files) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send({ files: files })
        }
    }).sort({ _id: -1 })
});
