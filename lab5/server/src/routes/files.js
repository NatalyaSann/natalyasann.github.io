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
                message: `File with ID_${data._id} saved successfully!`
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

router.get('/files/:id', (req, res) => {
    File.findById(req.params.id, 'title description', (err, file) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.send(file);
        }
    });
});

router.put('/files/:id', (req, res) => {
    File.findById(req.params.id, 'title description', (err, file) => {
        if (err) {
            console.log(err);
        } else {
            if (req.body.title) {
                file.title = req.body.title;
            }
            if (req.body.description) {
                file.description = req.body.description;
            }
            file.save(err => {
                if (err) {
                    res.sendStatus(500);
                } else {
                    res.sendStatus(200);
                }
            });
        }
    });
});

router.delete('/files/:id', (req, res) => {
    File.remove({ _id: req.params.id }, err => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    });
});
module.exports = router;
