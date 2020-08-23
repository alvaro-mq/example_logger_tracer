
const get = async (req, res, next) => {
  res.status(200).send('List of users');
}

module.exports = {
  get
}