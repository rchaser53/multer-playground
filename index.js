const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
 
const app = express()

app.post('/profile', upload.single('data'), (req, res, next) => {
  console.log(req.file);
  res.send("nya-n");
})
 
const server = app.listen(8000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("listening at http://%s:%s", host, port);
});