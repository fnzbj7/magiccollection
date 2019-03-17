exports.authenticate = (req, res, next) => {
  res.status(200).json({message: 'Authenticate!'});
}

exports.registration = (req, res, next) => {
  console.log('Bejött a regbe');
  console.log(req.body);
  if(req.body.username && req.body.password) {
    res.status(200).json({message: 'Registration!'});
    // TODO save to database

  } else {
    res.status(500).json({
      message: "Invalid authentication credentials!"
    });
  }
  
}
