const Students = require("../modles/students")

exports.createStudent = async (req, res) => {
  try
   {
    const data = await Students.create(req.body);
    res.status(201).json({ Success: true, data: data });
  } 
  
  catch (error)
   {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const data = await Students.find();
    res.status(200).json({ Success: true, data: data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const data = await Students.findById(req.params.id);
    res.status(200).json({ Success: true, data: data });
    } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const data = await Students.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after'});
    res.status(200).json({ Success: true, data: data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    await Students.findByIdAndDelete(req.params.id);
    res.status(200).json({ Success: true, message: "Student deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.loginStudent = async (req, res) => {
     try
     {
       const {name,age}  = req.body;

       const s= await Students.findOne({name});

       if(!s){
        return res.status(400).json({message:"Student not found"});
       }
        if(s.age !== age){
         return res.status(400).json({message:"Age does not match"});
        }
      
        res.status(200).json({message:"Login successful",id:s._id,Name:s.name});
     }

     catch(error)
     {
        res.status(400).json({ message: error.message });
     }
}
 
