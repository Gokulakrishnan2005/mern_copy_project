import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import  Listing from '../models/listing.model.js';

export const test = (req, res) => {
  res.json({
    message: 'Api route is working!',
  });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, 'You can only update your own account!'));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if(req.user.id !== req.params.id)  return next(errorHandler(401, 'You can delete only your Account! '));
  try {
    await User.findByIdAndDelete(req.params.id)
    res.clearCookie('access_token');
    res.status(200).json('account has been deleted! ');
  } catch (error) {
    next(error);
  }
}

// export const getUserListing = async (req, res, next) => {
//   if(req.user.id == req.params.id) {
//     try {
//       const listing = await Listing.find({ userRef: req.params.id });
//       res.status(200).json(listing);
//     } catch (error) {
//       next(error);
//     }
//    } else{
//       return next(errorHandler(401, ' you can only view your own listings!'));
//     }
// }

export const getUserListing = async (req, res, next) => {
  try {
    // Validate user ID match using a robust comparison
    if (req.user.id.toString() !== req.params.id.toString()) { // Explicit type conversion for safety
      return res.status(401).json({ message: 'You can only view your own listings!' });
    }

    const listing = await Listing.find({ userRef: req.params.id }); // Assuming 'find' is correct method

    if (!listing) {
      // Handle case where no listing is found
      return res.status(404).json({ message: 'Listing not found' });
    }

    res.status(200).json(listing);
  } catch (error) {
    next(error); // Pass on other errors for centralized handling
  }
};