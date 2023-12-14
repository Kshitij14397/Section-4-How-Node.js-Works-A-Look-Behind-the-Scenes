//#Section 4: How Node.js Works: A Look Behind The Scenes
//# 37. Streams in Practice
const fs = require('fs')
const server = require('http').createServer()

server.on("request", (req, res) => {
    // //Solution 1
    // fs.readFile('test-file.txt', (err, data) => {
    //     if(err)
    //     console.log(err);

    //     res.end(data);
    // })

    //Solution 2: Streams
    //A Readable Stream
    // const readable = fs.createReadStream("test-file.txt")

    // readable.on("data", (chunk) => {
    //     //res is a writable stream
    //     res.write(chunk)
    // })

    // readable.on("end", () => {
    //     res.end()
    // })

    // readable.on("error", (err) => {
    //     console.log(err);
    //     res.statusCode = 500
    //     res.end("File Not Found!")
    // })

    //Solution 3: Solving The Backpressure Issue
    const readable = fs.createReadStream("test-file.txt")
    readable.pipe(res)
    //readableSource.pipe(writableDestination)

})

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening...");
})