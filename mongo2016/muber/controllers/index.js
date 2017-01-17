export default {
  greeting(req, res) {
    res.send({ hi: 'there' });
  },

  create(req, res) {
    console.log(req.body); // eslint-disable-line
    res.send({ hi: 'there' });
  }
};
