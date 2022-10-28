//React Imports
import React, { useEffect } from "react";
//MUI Imports
import Navbar from "../../Components/Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
//Redux Imports
import {
  fetchAllUsers,
  nextPage,
  previousPage,
} from "../../redux/slices/users";
import { useDispatch, useSelector } from "react-redux";

import "./users.css";

function Users() {
  const { list: users } = useSelector((state: any) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers() as any);
  }, [dispatch]);

  const clickNextPage = () => {
    nextPage();
    dispatch(fetchAllUsers() as any);
  };

  const clickPreviousPage = () => {
    previousPage();
    dispatch(fetchAllUsers() as any);
  };

  return (
    <div className="Users">
      <Navbar></Navbar>
      <br></br>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {users.map((user, index) => (
            <Grid item xs={3.1}>
              <div>
                <Card
                  className="card3d"
                  sx={{
                    height: 600,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={user.avatar}
                    alt="avatar image"
                  ></CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {user.first_name} {user.last_name}
                    </Typography>
                    <Typography gutterBottom variant="h6">
                      {user.email}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
        <div className="btnDIV">
          <Button
            onClick={clickPreviousPage}
            sx={{
              width: 150,
            }}
            className="btn"
          >
            <Typography variant="h6" component="div">
              Prev page
            </Typography>
          </Button>
          <Button
            onClick={clickNextPage}
            sx={{
              width: 150,
            }}
            className="btn"
          >
            <Typography variant="h6" component="div">
              Next page
            </Typography>
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default Users;
