const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://test:test123@atlascluster.yh8f2.mongodb.net/expensetracker', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb+srv://ctfuanand:6nWuBjQPUDbF1Q7Q@cluster0.djqpmuv.mongodb.net/finance', {useNewUrlParser : true, useUnifiedtopology : true});
mongoose.connection.on('error', err => console.log(err));
mongoose.connection.on('connected', () => console.log("Mongo DB Connection Successfull"));