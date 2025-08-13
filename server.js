const express = require("express");
const path = require('path');

const app = express();

//setting ejs
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));


//using style.css
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = now.getHours(); // 24-hour format

  const isWeekday = day >= 1 && day <= 5;
  const isWorkingHour = hour >= 9 && hour < 17;

  if (isWeekday && isWorkingHour) {
    next();
  } else {
    res.render('sorry');
  }
});

//routers
app.use('/',require('./routes/home'));
app.use('/contact',require('./routes/contact'));
app.use('/services',require('./routes/services'));
//
app.listen(5000,(err)=>err?console.log(err):console.log("server is running"));

