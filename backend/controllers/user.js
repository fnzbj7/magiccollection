const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

/* ----------- REGISTRATION ------------ */
exports.registration = (req, res, next) => {
  console.log('Bejött a regbe');
  console.log(req.body);
  if(req.body.username && req.body.password) {
    // TODO save to database
    var connection = require('../db/db');

    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
          console.log('This is the password: ' + hash);
          //TODO check if email is already used

          connection.query('Select Email From player Where Email = ?', [req.body.email], (err, rows) => {
            if(err) {
              return res.status(500).json({message: 'Some error happend in the Database!'});
            }
            if(rows.length > 0){
              return res.status(400).json({message: 'Email already in use!'});
            }

            connection.query(
              'Insert into player (Email, Password, PlayerName) values (?,?,?)',
              [req.body.email, hash, req.body.username],
              (err, rows) => {
                if(err) {
                  return res.status(500).json({message: 'Some error happend in the Database!'});
                }
              console.log(rows);

              var api_key = process.env.MAILGUN_API_KEY;
              var domain = 'mg.almateszekfoglaltvolt.hu';
              var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain, host: 'api.eu.mailgun.net'});
              
              var data = {
                from: 'Excited User <magic@mg.almateszekfoglaltvolt.hu>',
                to: req.body.email,
                subject: 'Hello, test mail',
                text: 'Testing some Mailgun awesomeness!'
              };
              
              mailgun.messages().send(data, function (error, body) {
                console.log(body);
              });

              /* Első Mail küldési próbálkozás */
              // const sgMail = require('@sendgrid/mail');
              // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
              // const msg = {
              //   to: 'jukijun91@gmail.com',
              //   from: 'magic@almateszekfoglaltvolt.hu',
              //   subject: 'Sending with SendGrid is Fun',
              //   text: 'and easy to do anywhere, even with Node.js',
              //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
              // };
              // sgMail.send(msg);

              return res.status(200).json({message: 'Registration successfull!'});
            });
          });
      });
    });

    //connection.query('');
  } else {
    res.status(500).json({
      message: "Invalid authentication credentials!"
    });
  }
  
}

/* ----------- LOGIN ----------- */
exports.userLogin = (req, res, next) => {
  let fetchedUser;
  var connection = require('../db/db');
  connection.query('Select PlayerID, PlayerName, FirstName, LastName, DciNumber, Password From player Where email = ?', [req.body.email], (err, rows) => {
    console.log(rows);
    if(rows.length !== 1){
      return res.status(401).json({
        message: 'There is no User with this email (or maybe more than 1)'
      });
    }

    bcrypt.compare(req.body.password, rows[0].Password, function(err, result) {
      if(result) {
        console.log('Az env: ' + process.env.JWT_KEY_MAGIC);
        const token = jwt.sign(
          {Id: rows[0].PlayerID},
          process.env.JWT_KEY_MAGIC,
          {expiresIn: '1h'}
        );
        res.status(200).json({
          id: rows[0].PlayerID,
          username: rows[0].PlayerName,
          email: req.body.email,
          firstName: rows[0].FirstName,
          lastName: rows[0].LastName,
          token: token,
          // expiresIn: 3600,
          // userId: fetchedUser._id
        });
        console.log('Csak megegyezik a jelszó');
      } else {
        if(err) {
          console.error(err);
        }
        return res.status(401).json({
          message: 'Error with the password!'
        });
      }
    });
      
  });

  // User.findOne({email: req.body.email})
  //   .then(user => {
  //     if (!user) {
  //       return res.status(401).json({
  //         message: 'Auth failed1'
  //       });
  //     }
  //     fetchedUser = user;
  //     return bcrypt.compare(req.body.password, user.password);
  //   })
  //   .then( result => {
  //     if (!result) {
  //       return res.status(401).json({
  //         message: 'Auth failed2'
  //       });
  //     }
  //     const token = jwt.sign(
  //       {email: fetchedUser.email, userId: fetchedUser._id},
  //       process.env.JWT_KEY,
  //       {expiresIn: '1h'}
  //     );
  //     res.status(200).json({
  //       token: token,
  //       expiresIn: 3600,
  //       userId: fetchedUser._id
  //     });

  //   })
  //   .catch(err => {
  //     return res.status(401).json({
  //       message: 'Invalid authentication credential!'
  //     });
  //   });
}
