const mongoose=require("mongoose")
const bcrypt = require('bcryptjs');
const sc = new mongoose.Schema({
    name:{
type:String,
enum:["aec","de","aeclab","delab","etc","maths","itws"],
default:""
    },
    attendence: 
         [new mongoose.Schema({
            year: {
                type: Number,
                enum: [2021, 2022, 2023, 2024, 2025]
            },
            month: {
                type: Number
            },
            dateoftakingclass: [Number],
            dateofpresent: [Number],
            totalclasses: {
                type: Number,
                default: 0
            },
            present: {
                type: Number,
                default: 0
            }
        })]
    
});
const schema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    rollno: {
        type: Number
    },
    password: {
        type: String,
        required: true,
        min: 8

    },
    
    branch: new mongoose.Schema({
            CE32:  new mongoose.Schema({
                    subjects: [sc],
                default:{}
                })
            ,
            CE31:  new mongoose.Schema({
                    subjects: new mongoose.Schema({
                        aec: sc,
                        de: sc,
                        etc: sc,
                        maths: sc,
                        aeclab:sc,
                        delab: sc,
                        itws:sc
                    })
                })
            
        }),
     

    
    universityname: {
        type: String,
        enum: ["jcboseust"],
        
    },

});
const model=mongoose.model("universitystudent",schema);
const doc=new model({
    username:"meenu",
    rollno:21001003079,
    password:"123456788",
    email:"kakranmeenu@gmail.com",
   universityname:"jcboseust",
   branch:{
    CE31:{
        subjects:{}
    }
   }

})
doc.branch.CE31.subjects.aec={
    name:"maths",
    attendence:[
        {
            year:2022,
        month:12,
        dateoftakingclass:[],
        dateofpresent: [],
totalclasses: 0,
present: 0
        }
    ]
}
console.log(doc.branch.CE31.subjects)