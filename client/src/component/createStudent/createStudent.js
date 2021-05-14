import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  head: {
    color: "Red",
    justifyContent: "center",
    margin: "20px",
    textAlign: "center",
  },
}));

export default function CreateStudent() {
  const classes = useStyles();

  const [student, setStudent] = useState({
    regNo: 0,
    studentName: "",
    grade: "",
    section: "",
  });

  function changeState(event) {
    const name = event.target.name;
    const data = event.target.value;
    console.log(event.target.name);
    setStudent((pre) => {
      return {
        ...pre,
        [name]: data,
      };
    });
  }

  //   use axios to the send data to front end to back end
  //   npm install axios --save
  function createStudent() {
    axios.post("http://localhost:5000/students", student).then(() => {
      window.location.reload(false);
    });
  }

  return (
    <div>
      <h2 className={classes.head}>Create a Student</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="RegistrationNumber"
          variant="outlined"
          name="regNo"
          onChange={changeState}
          value={student.regNo}
          //
        />
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="studentName"
          onChange={changeState}
          value={student.studentName}
        />
        <TextField
          id="outlined-basic"
          label="year"
          variant="outlined"
          name="grade"
          onChange={changeState}
          value={student.grade}
        />
        <TextField
          id="outlined-basic"
          label="Section"
          variant="outlined"
          name="section"
          onChange={changeState}
          value={student.section}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => createStudent()}
        >
          Crete Students
        </Button>
      </form>
    </div>
  );
}
