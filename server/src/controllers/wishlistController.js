const Wishlist = require('../models/Wishlist');

const getOrCreateWishlist = async () => {
    let wishlist = await Wishlist.findOne().populate('products');
    if (!wishlist) wishlist = await Wishlist.create({ products: [] });
    return wishlist.populate('products');
};

const getWishlist = async (req, res, next) => {
    try {
        const wishlist = await getOrCreateWishlist();
        res.status(200).json(wishlist);
    } catch (error) {
        next(error);
    }
};

const addToWishlist = async (req, res, next) => {
    try {
        const { productId } = req.body;
        const wishlist = await getOrCreateWishlist();
        const exists = wishlist.products.some((item) => item._id.toString() === productId);
        if (!exists) wishlist.products.push(productId);
        await wishlist.save();
        await wishlist.populate('products');
        res.status(200).json(wishlist);
    } catch (error) {
        next(error);
    }
};

const removeFromWishlist = async (req, res, next) => {
    try {
        const wishlist = await getOrCreateWishlist();
        wishlist.products = wishlist.products.filter((item) => item._id.toString() !== req.params.id);
        await wishlist.save();
        await wishlist.populate('products');
        res.status(200).json(wishlist);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getWishlist,
    addToWishlist,
    removeFromWishlist
};
