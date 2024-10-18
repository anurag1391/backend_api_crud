const inquiriesModel = require('../models/inquiries');
const propertiesModel = require('../models/properties');

const getInquiries = async (req, res) => {
    const inquiries = await inquiriesModel.getInquiries();
    res.json(inquiries);
};

const getInquiryById = async (req, res) => {
    const inquiry = await inquiriesModel.getInquiryById(req.params.id);
    res.json(inquiry);
};

const createInquiry = async (req, res) => {
    const { property_id, name, email, message } = req.body;
    const propertyExists = await propertiesModel.getPropertyById(property_id, name, email, message); // Implement this function

    if (!propertyExists) {
        return res.status(400).json({ error: 'Invalid property ID.' });
    }
    const newInquiry = await inquiriesModel.createInquiry(req.body);
    res.status(201).json(newInquiry);
};

const updateInquiry = async (req, res) => {
    const updatedInquiry = await inquiriesModel.updateInquiry(req.params.id, req.body);
    res.json(updatedInquiry);
};

const deleteInquiry = async (req, res) => {
    await inquiriesModel.deleteInquiry(req.params.id);
    res.status(204).send();
};

module.exports = {
    getInquiries,
    getInquiryById,
    createInquiry,
    updateInquiry,
    deleteInquiry,
};
