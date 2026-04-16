const Cart = require('../models/Cart');

const getOrCreateCart = async () => {
    let cart = await Cart.findOne().populate('products.productId');
    if (!cart) cart = await Cart.create({ products: [] });
    return cart.populate('products.productId');
};

const getCart = async (req, res, next) => {
    try {
        const cart = await getOrCreateCart();
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
};

const addToCart = async (req, res, next) => {
    try {
        const { productId, quantity = 1 } = req.body;
        const cart = await getOrCreateCart();
        const item = cart.products.find((entry) => entry.productId._id.toString() === productId);
        if (item) {
            item.quantity += quantity;
        } else {
            cart.products.push({ productId, quantity });
        }
        await cart.save();
        await cart.populate('products.productId');
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
};

const updateCartItem = async (req, res, next) => {
    try {
        const { quantity } = req.body;
        const cart = await getOrCreateCart();
        const item = cart.products.find((entry) => entry.productId._id.toString() === req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Cart item not found' });
        }
        item.quantity = quantity;
        await cart.save();
        await cart.populate('products.productId');
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
};

const removeFromCart = async (req, res, next) => {
    try {
        const cart = await getOrCreateCart();
        cart.products = cart.products.filter((entry) => entry.productId._id.toString() !== req.params.id);
        await cart.save();
        await cart.populate('products.productId');
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart
};
