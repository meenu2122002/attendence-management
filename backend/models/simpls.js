const mongoose=require("mongoose")

const subdocumentSchema = new mongoose.Schema({
    child: new mongoose.Schema({
      name: String,
      age: {
        type: Number,
        default: 0
      }
    })
  });
  const Subdoc = mongoose.model('Subdoc', subdocumentSchema);
  
  // Note that the `age` default has no effect, because `child`
  // is `undefined`.
  const doc = new Subdoc({
    child:{
        name:"meenu",
        age:20
    }
  });
console.log(  doc.child )