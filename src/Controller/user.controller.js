import User from '../Models/user.model.js';

export const saveUserData = async (req, res) => {
  try {
    const { name, email, picture } = req.body|| {};

    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

 
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ name, email, picture });
      await user.save();
    }

    res.status(200).json({ message: 'User saved successfully', user });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
