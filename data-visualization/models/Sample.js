var mongoose = require('mongoose');
var SampleSchema = new mongoose.Schema({
  _id: String,
  value: Number,
},
{
    collection: 'average_life_expectancy_collection'
});
mongoose.model('Sample', SampleSchema);