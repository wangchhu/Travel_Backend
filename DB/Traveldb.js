const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/Travel_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
