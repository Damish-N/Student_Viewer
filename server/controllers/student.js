import student from "../models/student.js";

export const getStudents = async function (req, res) {
  try {
    const allStudents = await student.find();
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(404).json({ massage: error });
  }
};

export const createStudent = async function (req, res) {
  const cstudent = req.body;
  const newStudent = new student(cstudent);

  try {
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(409).json({ massage: error });
  }
};
