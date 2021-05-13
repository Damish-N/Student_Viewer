import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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

  const changeState = function (event) {
    console.log(event);
  };

  return (
    <div>
      <h2 className={classes.head}>Create a Student</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="RegistrationNumber"
          variant="outlined"
          value={student.regNo}
          onChange={changeState}
        />
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={student.studentName}
        />
        <TextField
          id="outlined-basic"
          label="Grade"
          variant="outlined"
          value={student.grade}
        />
        <TextField
          id="outlined-basic"
          label="Section"
          variant="outlined"
          value={student.section}
        />
        <Button variant="contained" color="secondary">
          Crete Students
        </Button>
      </form>
    </div>
  );
}
