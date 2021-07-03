const express = require("express");
const myDB = require("../db");
const router = express.Router();

router.get("/rglData", async (req, res, next) => {
  // res.json({test:'test'})

  try {
    let results = await myDB.getRglData();
    res.json(results);
  } catch (error) {
    // console.log("🚀 ~ file: index.js ~ line 12 ~ router.get ~ error", error);
    res.json({error:'Something Wrong'})
  }
});

router.get("/tableConfig", async (req, res, next) => {
  // res.json({test:'test'})

  try {
    let results = await myDB.getTableConfig();
    res.json(results);
  } catch (error) {
    // console.log("🚀 ~ file: index.js ~ line 12 ~ router.get ~ error", error);
    res.json({error:'Something Wrong'})
  }
});

router.get("/user", async (req, res, next) => {
  try {
    let results = await myDB.userInfo();
    res.json(results);
  } catch (error) {
    // console.log("🚀 ~ file: index.js ~ line 12 ~ router.get ~ error", error);
  }
});
router.get("/user/id/:id", async (req, res, next) => {
  try {
    let results = await myDB.userById(req.params.id);
    typeof results !== "undefined"
      ? res.json(results)
      : res.json({ User: "No User" });
  } catch (error) {
    // console.log("🚀 ~ file: index.js ~ line 12 ~ router.get ~ error", error);
  }
});
router.get("/user/name/:name", async (req, res, next) => {
  try {
    let results = await myDB.userByName(req.params.name);
    typeof results !== "undefined"
      ? res.json(results)
      : res.json({ User: "No User" });
  } catch (error) {
    // console.log("🚀 ~ file: index.js ~ line 12 ~ router.get ~ error", error);
  }
});



//POST DATA


router.post("/adduser", async (req, res, next) => {
    // console.log('req.body',req.body)
    try {
      let results = await myDB.addUser(req.body);
    //   console.log('res.JSON({info:"Success"})', results.affectedRows )

      results.affectedRows>0 ? res.json({info:"Success Insert"}) : res.JSON({info:"Failed Create"})


    res.send(results);
    } catch (error) {
      // console.log("🚀 ~ file: index.js ~ line 12 ~ router.get ~ error", error);
    }
  });

  router.put("/addrgldata", async (req, res, next) => {
    // console.log('req.body',req.body)
    try {
      let results = await myDB.addRglData(req.body);
    //   console.log('res.JSON({info:"Success"})', results.affectedRows )

      results.affectedRows>0 ? res.json({info:"Success Insert"}) : res.JSON({info:"Failed Insert"})


    res.send(results);
    } catch (error) {
      // console.log("🚀 ~ file: index.js ~ line 12 ~ router.get ~ error", error);
    }
  });

  router.put("/addtabledata", async (req, res, next) => {
    // console.log('req.body',req.body)
    try {
      let results = await myDB.addRglTableCOnfig(req.body);
    //   console.log('res.JSON({info:"Success"})', results.affectedRows )

      results.affectedRows>0 ? res.json({info:"Success Insert"}) : res.JSON({info:"Failed Insert"})


    res.send(results);
    } catch (error) {
      // console.log("🚀 ~ file: index.js ~ line 12 ~ router.get ~ error", error);
      res.json({error:'Error Adding data'})
    }
  });

module.exports = router;
