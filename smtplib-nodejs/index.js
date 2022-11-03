const express = require('express')
const cors = require('cors')
const { spawn } = require('child_process');

const app = express();
const port = 8080;

app.use(cors());

app.get('/', (req, res) => {
    let dataToSend;
    const python = spawn('python', ['main.py']);
    
    // collect data from script
    python.stdout.on('data', data => {
      console.log('Pipe data from python script ...');
      console.log(data.toString())

      // stores the last line of output
      dataToSend = data.toString().trim();
    });
    
    // in close event we are sure that stream from child process is closed
    python.on('close', code => {
      console.log(`child process close all stdio with code ${code}`);
      // send data to browser
      res.json({ result: dataToSend })
    });
})

app.listen(process.env.PORT || port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})