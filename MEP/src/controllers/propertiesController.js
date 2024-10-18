const propertiesModel = require('../models/properties');

const getProperties = async (req, res) => {
    const properties = await propertiesModel.getProperties();
    res.json(properties);
};

const getPropertyById = async (req, res) => {
    const property = await propertiesModel.getPropertyById(req.params.id);
    res.json(property);
};

const createProperty = async (req, res) => {
    const newProperty = await propertiesModel.createProperty(req.body);
    res.status(201).json(newProperty);
};

const updateProperty = async (req, res) => {
    const updatedProperty = await propertiesModel.updateProperty(req.params.id, req.body);
    res.json(updatedProperty);
};

const deleteProperty = async (req, res) => {
    await propertiesModel.deleteProperty(req.params.id);
    res.status(204).send();
};

module.exports = {
    getProperties,
    getPropertyById,
    createProperty,
    updateProperty,
    deleteProperty,
};
