import StudentData from "../models/student.js";

export const getStudents = async function (req, res) {
  try {
    const allStudents = await StudentData.find();
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(404).json({ massage: error });
  }
};

export const createStudent = async function (req, res) {
  const cstudent = req.body;
  const newStudent = new StudentData(cstudent);

  try {
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(409).json({ massage: error });
  }
};

export const deleteStudent = async function (req, res) {
  const id = req.params.id;

  try {
    await StudentData.findByIdAndRemove(id).exec();
    res.send("Successfully Delted");
  } catch (error) {
    console.log(error);
  }
};
