import Listing from '../models/listing.model.js';

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return res.status(404).json({ error: 'Listing not found!' });
  }

  if (req.user.id !== listing.userRef) {
    return res.status(401).json({ error: 'You can only delete your own listings!' });
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Listing has been deleted successfully' });
  } catch (error) {
    next(error);
  }
};
