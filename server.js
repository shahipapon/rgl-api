const express = require("express");
const apiRouter = require("./src/routes");
const  cors = require('cors')

const app = express();
app.use(cors())



app.use(express.json());
app.use("/api", apiRouter);

// simple route
app.get("/", (req, res) => {
  const abc = ` <div>
 Available Endpoints(GET)

 <a href="api/rglData"><li>rgl data</li> </a>
 <a href="api/user"><li>All User</li></a>
 <a href="api/user/id/1"><li>User By Id</li></a>
 <a href="api/user/name/Name1"><li>User By Name</li></a>
 

</div>`;

  res.send(abc);
});

// set port, listen for requests
app.listen(3008, () => {
  console.log("Server is running on port 3008.");
});
