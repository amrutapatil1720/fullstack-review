const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  full_name: String,
  private: Boolean,
  html_url: String,
  description: String,
  fork : Boolean,
  url: String,
  watchers: Number,
  forks_count :Number,
  watchers_count: Number

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  
  console.log(data);
  data.map(item => {
    Repo.create(data,  err =>{
      if(err) return console.log(err);

      console.log("repo saved");
    });
   });

}

const get25Repos =(callback) =>{
   //get 25 repos from database
  Repo.find().limit(25).exec(function(err, data) {
    if(err) {
     callback(err);
    }
    else {
      callback(null,data);
    }
  })
}

module.exports.save = save;
module.exports.get25Repos =get25Repos;