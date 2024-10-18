const db = require('../config/db');

const getProperties = async () => {
    const res = await db.query('SELECT * FROM properties');
    return res.rows;
};

const getPropertyById = async (id) => {
    const res = await db.query('SELECT * FROM properties WHERE id = $1', [id]);
    return res.rows[0];
};

const createProperty = async (property) => {
    const res = await db.query(
        'INSERT INTO properties (location, description, price) VALUES ($1, $2, $3) RETURNING *',
        [property.location, property.description, property.price]
    );
    return res.rows[0];
};

const updateProperty = async (id, property) => {
    const res = await db.query(
        'UPDATE properties SET title = $1, description = $2, price = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *',
        [property.title, property.description, property.price, id]
    );
    return res.rows[0];
};

const deleteProperty = async (id) => {
    await db.query('DELETE FROM properties WHERE id = $1', [id]);
};

module.exports = {
    getProperties,
    getPropertyById,
    createProperty,
    updateProperty,
    deleteProperty,
};
