

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}

export default (req, res) => {  

  console.log(req.body);
    res.json({ success: req.body});
  }









