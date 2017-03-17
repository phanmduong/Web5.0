<<<<<<< HEAD
/**
 * Created by Phan M Duong on 2/22/2017.
 */

let fileUntils = require('./FileUtils');

let argv = process.argv.slice(2);

let fileInput = argv[0];
let fileOutput = argv[1];


fileUntils.readfile(fileInput, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        data.forEach((value) => {
            console.log(value);
        });

        writeFile(fileOutput, data);
    }
});

writeFile = (file, data) => {
    fileUntils.writefile(file, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Write file success");
        }
    });
};


=======
/**
 * Created by Phan M Duong on 2/22/2017.
 */

let fileUntils = require('./FileUtils');

let argv = process.argv.slice(2);

let fileInput = argv[0];
let fileOutput = argv[1];


fileUntils.readfile(fileInput, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        data.forEach((value) => {
            console.log(value);
        });

        writeFile(fileOutput, data);
    }
});

writeFile = (file, data) => {
    fileUntils.writefile(file, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Write file success");
        }
    });
};


>>>>>>> b763d044d2a539ef6982ea1f1756792e2dccfe73
