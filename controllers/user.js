const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const checkEmailQuery = "Select Email From player Where Email = ?";
const insertPlayerQuery =
  "Insert into player (Email, Password, PlayerName, Activated) values (?,?,?,0)";

/* ----------- REGISTRATION ------------ */
exports.registration = (req, res, next) => {
  console.log("Registration start!");
  if (req.body.username && req.body.password) {
    var connection = require("../db/db");

    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        connection
          .query(checkEmailQuery, [req.body.email])
          .then(rows => {
            if (rows.length > 0) {
              res.status(420).json({ message: "Email already in use!" });
              throw new Error("handled");
            }

            return connection.query(insertPlayerQuery, [
              req.body.email,
              hash,
              req.body.username
            ]);
          })
          .then(rows => {
            var api_key = process.env.MAILGUN_API_KEY;
            var domain = "mg.almateszekfoglaltvolt.hu";
            var mailgun = require("mailgun-js")({
              apiKey: api_key,
              domain: domain,
              host: "api.eu.mailgun.net"
            });

            var data = {
              from: "Excited User <magic@mg.almateszekfoglaltvolt.hu>",
              to: req.body.email,
              subject: "Hello, test mail",
              text: "Testing some Mailgun awesomeness!",
              html: `Itt egy link <a href="www.almateszekfoglaltvolt.hu?${hash}">Klikkelj ide a hitelesítéshez</a>`
            };

            console.log("Mail sending start!");
            return mailgun.messages().send(data, function(error, body) {
              if (error) {
                console.log(error);
                res
                  .status(500)
                  .json({ message: "Error happend with the Mail sending" });
              } else {
                res.status(200).json({ message: "Registration successfull!" });
              }
            });
          })
          .catch(error =>
            error === "DbError"
              ? res
                  .status(500)
                  .json({ message: "Some error happend in the Database!" })
              : "Ignored"
          );
      });
    });

    //connection.query('');
  } else {
    res.status(500).json({
      message: "Invalid authentication credentials!"
    });
  }
};

const playerQuery =
  "Select PlayerID, PlayerName, FirstName, LastName, DciNumber, Password From player Where email = ?";

/* ----------- LOGIN ----------- */
exports.userLogin = (req, res, next) => {
  let fetchedUser;
  var connection = require("../db/db");
  connection.query(playerQuery, [req.body.email]).then(rows => {
    console.log(rows);
    if (rows.length !== 1) {
      return res.status(421).json({
        message: "There is no User with this email (or maybe more than 1)"
      });
    }

    bcrypt.compare(req.body.password, rows[0].Password, function(err, result) {
      if (result) {
        console.log("Az env: " + process.env.JWT_KEY_MAGIC);
        const token = jwt.sign(
          { Id: rows[0].PlayerID },
          process.env.JWT_KEY_MAGIC,
          { expiresIn: "1h" }
        );
        res.status(200).json({
          id: rows[0].PlayerID,
          username: rows[0].PlayerName,
          email: req.body.email,
          firstName: rows[0].FirstName,
          lastName: rows[0].LastName,
          token: token
          // expiresIn: 3600,
          // userId: fetchedUser._id
        });
        console.log("Csak megegyezik a jelszó");
      } else {
        if (err) {
          console.error(err);
        }
        return res.status(421).json({
          message: "Error with the password!"
        });
      }
    });
  });
};

exports.verification = (req, res, next) => {
  if (!req.query.api) {
    return res.status(401).json({ message: "Api key missing!" });
  }

  var connection = require("../db/db");
  connection
    .query(
      "Select Player_1 From emailverification Where VerificationHash = ?",
      [req.query.api]
    )
    .then(rows => {
      if (rows.length === 0) {
        console.log("Üres a tömb!");
        return res.status(401).json({ message: "Üres tömb!" });
      }

      return connection.query(
        "Update player set activeted = 0 where Player_1 = ?",
        [rows[0].Player_1]
      );
    })
    .then(rows => {
      return connection.query(
        "Delete from emailverification where VerificationHash = ?",
        [req.query.api]
      );
    })
    .then(rows => {
      res.json({ message: "Account aktiválva!" });
    })
    .catch(err =>
      res.status(500).json({ message: "Hiba az adatbázisnál", error: err })
    );
};
