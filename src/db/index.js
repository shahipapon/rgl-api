const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 100,
  password: "",
  user: "root",
  database: "rgl",
  host: "localhost",
});

let myDB = {};
myDB.getRglData = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM rglData", (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};
myDB.getTableConfig = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM rglTableConfig", (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

myDB.userInfo = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM user", (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

myDB.userById = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM user WHERE id = ? `, [id], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res[0]);
    });
  });
};

myDB.userByName = (name) => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM user WHERE name = ? `, [name], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res[0]);
    });
  });
};

myDB.addUser = (values) => {
  return new Promise((resolve, reject) => {
    pool.query(`INSERT INTO user(Name, Mail, Image)  VALUES(?,?,?) `, [values.name, values.mail, values.image], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

myDB.addRglData = (values) => {
  return new Promise((resolve, reject) => {
    pool.query(`UPDATE rglData SET data = ? where id = 1 `, [values.data], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

myDB.addRglTableCOnfig = (values) => {
  return new Promise((resolve, reject) => {
    pool.query(`UPDATE rglTableConfig SET config = ? where id = 0 `, [values.data], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};
module.exports = myDB;
