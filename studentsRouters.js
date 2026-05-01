const express = require("express")
const router = express.Router();
const {createStudent,getAllStudents,getStudentById,updateStudent,deleteStudent,loginStudent} = require("../controllers/studentsControllers")

router.post("/", createStudent);
router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.put("/:id",updateStudent);
router.delete("/:id",deleteStudent);
router.post("/login",loginStudent);


module.exports = router;
