import React, { useState } from "react";
import { InputLabel, FormControl, Input, Paper, Button,Select,MenuItem, RadioGroup,
    FormControlLabel, Radio,Checkbox,Typography,FormHelperText} from "@mui/material";
import { useDispatch } from "react-redux";
import {addNewUser} from '../redux/store/slices/UserInfo';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    // const userInfo = useSelector((state)=> state.userInfo);
    const dispatch = useDispatch();
    const navigate=useNavigate()
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    favoriteGenre: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    // e.preventDefault();
    // dispatch(addNewUser(form));
    const { name, value } = e.target;
    setForm({...form, [name]:value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up Data:", form);
    dispatch(addNewUser(form))  //{type:"vzxc" , payload:form}
    navigate("/profile");
  };

  return (
    <div className="d-flex justify-content-center align-items-center col-12 my-5" style={{ height: "100vh" }}>
      <Paper elevation={3} className="p-4 col-11 col-md-7 mx-auto">
        <Typography variant="h4" textAlign="center" gutterBottom>Sign Up</Typography>

        <form onSubmit={handleSubmit}>

          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Username</InputLabel>
            <Input name="username" value={form.username} onChange={handleChange} required />
          </FormControl>

          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Email</InputLabel>
            <Input type="email" name="email" value={form.email} onChange={handleChange} required />
          </FormControl>

          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Password</InputLabel>
            <Input type="password" name="password" value={form.password} onChange={handleChange} required />
          </FormControl>

          <FormControl component="fieldset" sx={{ marginBottom: 2 }}>
            <Typography>Gender</Typography>
            <RadioGroup row name="gender" value={form.gender} onChange={handleChange}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Favorite Genre</InputLabel>
            <Select name="favoriteGenre" value={form.favoriteGenre} onChange={handleChange} required>
              <MenuItem value="action">Action</MenuItem>
              <MenuItem value="comedy">Comedy</MenuItem>
              <MenuItem value="drama">Drama</MenuItem>
              <MenuItem value="horror">Horror</MenuItem>
              <MenuItem value="sci-fi">Anime</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control= {<Checkbox name="termsAccepted" checked={form.termsAccepted} onChange={handleChange} />}
            label="I agree to Terms & Conditions."/>
          {!form.termsAccepted && <FormHelperText sx={{ color: "red" }}>You must accept the terms to continue.</FormHelperText>}

          <Button type="submit" fullWidth variant="contained" color="warning" sx={{ marginTop: 2 }}>Sign Up</Button>
        </form>
      </Paper>
    </div>
  );
};

export default SignUp;
