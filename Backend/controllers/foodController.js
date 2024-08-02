const FoodPost = require('../models/FoodPost');

// Create Food Post
exports.createFoodPost = async (req, res) => {
  const { foodDescription, quantity, pickupTime } = req.body;
  try {
    const newFoodPost = new FoodPost({
      owner: req.user.id,
      foodDescription,
      quantity,
      pickupTime
    });
    const foodPost = await newFoodPost.save();
    res.json(foodPost);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get All Food Posts
exports.getFoodPosts = async (req, res) => {
  try {
    const foodPosts = await FoodPost.find({ status: 'available' }).populate('owner', ['name', 'phoneNumber', 'address']);
    res.json(foodPosts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update Food Post
exports.updateFoodPost = async (req, res) => {
  const { foodDescription, quantity, pickupTime, status } = req.body;
  try {
    let foodPost = await FoodPost.findById(req.params.id);
    if (!foodPost) {
      return res.status(404).json({ msg: 'Food post not found' });
    }
    // Check user
    if (foodPost.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    foodPost.foodDescription = foodDescription || foodPost.foodDescription;
    foodPost.quantity = quantity || foodPost.quantity;
    foodPost.pickupTime = pickupTime || foodPost.pickupTime;
    foodPost.status = status || foodPost.status;
    await foodPost.save();
    res.json(foodPost);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete Food Post
exports.deleteFoodPost = async (req, res) => {
  try {
    let foodPost = await FoodPost.findById(req.params.id);
    if (!foodPost) {
      return res.status(404).json({ msg: 'Food post not found' });
    }
    // Check user
    if (foodPost.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    await foodPost.remove();
    res.json({ msg: 'Food post removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
