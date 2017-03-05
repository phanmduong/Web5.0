let express = require('express');
let fs = require('fs');
let app = express();
let router = express.Router();
// let bodyParser = require('body-parser');

// router.use(bodyParser.json());
app.use(router);

router.get('/getAllUser', (req, res) => {
    fs.readFile('./users.json', (err, data) => {
        if (err) {
            res.end(err.toString());
        } else {
            res.end(data.toString());
        }
    })
});

router.post('/createUser', (req, res) => {
    fs.readFile(__dirname + '/' + 'users.json', (err, data) => {
        if (err) {
            req.end(err.toString());
        } else {
            let tempData = JSON.parse(data);
            let newUser = req.body;
            if (tempData['user' + newUser.userName] == undefined) {
                tempData['user' + newUser.userName] = newUser;

                fs.writeFile(__dirname + '/' + 'users.json', JSON.stringify(tempData), (err) => {
                    if (err) {
                        req.end(err.toString());
                    } else {
                        res.json(tempData);
                    }
                });
            } else {
                res.end("User exists");
            }
        }
    });
});

// router.put('/editUser', (req, res) => {
//     fs.readFile(__dirname + '/' + 'users.json', (err, data) => {
//         if (err) {
//             req.end(err.toString());
//         } else {
//             let tempData = JSON.parse(data);
//             let newUser = req.body;
//             tempData['user' + newUser.userName] = newUser;
//
//             fs.writeFile(__dirname + '/' + 'users.json', JSON.stringify(tempData), (err) => {
//                 if (err) {
//                     req.end(err.toString());
//                 } else {
//                     res.json(tempData);
//                 }
//             });
//         }
//     });
// });

// app.use('/user/:id', function (req, res, next) {
//     next();
// });

app.param('id', function (req, res, next) {
    next();
});

app.get('/user/:id/getUser', function (req, res, next) {
    fs.readFile(__dirname + '/' + 'users.json', (err, data) => {
        if (err) {
            req.end(err.toString());
        } else {
            let tempData = JSON.parse(data);
            let user = tempData['user' + req.params.id];
            let StringUser = JSON.stringify(user);
            if (StringUser != undefined) {
                res.end(JSON.stringify(user));
            } else {
                res.end('Not Found User');
            }
        }
    });
});

app.put('/user/:id/editUser', function (req, res, next) {
        fs.readFile(__dirname + '/' + 'users.json', (err, data) => {
            if (err) {
                req.end(err.toString());
            } else {
                let tempData = JSON.parse(data);
                let newUser = req.body;
                tempData['user' + req.params.id] = newUser;

                fs.writeFile(__dirname + '/' + 'users.json', JSON.stringify(tempData), (err) => {
                    if (err) {
                        req.end(err.toString());
                    } else {
                        res.json(tempData);
                    }
                });
            }
        });
    }
);


app.listen(8080, () => {
    console.log("Run server 8080");
})
