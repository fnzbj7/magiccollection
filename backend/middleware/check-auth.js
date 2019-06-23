const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY_MAGIC);
    req.userData = {email: decodedToken.email, userId: decodedToken.Id};
    next();
  } catch (error) {
    //res.status(401).json({ message: 'You are not authenticated!' });
    req.userData = {email: '', userId: 0};
    next();
  }
}
