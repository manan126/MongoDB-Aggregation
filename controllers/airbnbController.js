const Airbnb = require('../models/airbnbModel');

exports.getProperties = async (req, res) => {
  const { property_type, name } = req.query;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const properties = await Airbnb.find({
      ...(property_type && { property_type }),
      ...(name && { name: { $regex: name, $options: 'i' } })
    })
    .sort({ name: 1 })
    .skip(skip)
    .limit(limit);

    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};