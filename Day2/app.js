const login = require('./customEvent')
const myLogin = new login()
const fs = require('fs')


/**************** TASK ONE ****************/

console.log('\x1b[36m%s\x1b[0m','*********Task 1 *********')

myLogin.on('data', function (data) {
    console.log('\x1b[36m%s\x1b[0m', `\nData: ${data}`)
})
myLogin.emit('data','I am testing the custom event')


/**************** TASK TWO ****************/

/**************** PART ONE ****************/
console.log('\x1b[33m%s\x1b[0m', '\n********* Task 2 *********')

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./assets/greet.txt')
});

lineReader.on('line', function (line) {
    console.log('\x1b[33m%s\x1b[0m', `\nLine from file: ${line}`)
});

/**************** PART TWO ****************/
/*fs.rename('./assets/test.txt', './assets/info.txt', function (err) {
    if (err) console.log('ERROR: ' + err);
})*/

/*************** PART THREE ***************/
/*fs.unlink('./assets/info.txt', function (err) {
    if (err) throw err;
    // if no error, file has been deleted successfully
    console.log('File deleted!');
});*/

/*************** PART FOUR ***************/

// Read file sync
let data = fs.readFileSync("data.json")
console.log(data.toString())

// Read file async
fs.readFile("data.json", (err, data) => {
    if (err) throw err
    console.log(data.toString())
})

/*************** PART FIVE ***************/

const content = 'Hello iti'

fs.writeFile('./assets/info.txt', content, err => {
            if (err) {
                console.error(err)
                return
    }
})

/**************** PART SIX ****************/
//bonus -- create dir
var dir = './test_create_dir';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}