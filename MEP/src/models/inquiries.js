const db = require('../config/db');

const getInquiries = async () => {
    const res = await db.query('SELECT * FROM inquiries');
    return res.rows;
};

const getInquiryById = async (id) => {
    const res = await db.query('SELECT * FROM inquiries WHERE id = $1', [id]);
    return res.rows[0];
};

const createInquiry = async (inquiry) => {
    const res = await db.query(
        'INSERT INTO inquiries (property_id, name, email, message) VALUES ($1, $2, $3, $4) RETURNING *',
        [inquiry.property_id, inquiry.name, inquiry.email, inquiry.message]
    );
    return res.rows[0];
};

const updateInquiry = async (id, inquiry) => {
    const res = await db.query(
        'UPDATE inquiries SET name = $1, email = $2, message = $3 WHERE id = $4 RETURNING *',
        [inquiry.name, inquiry.email, inquiry.message, id]
    );
    return res.rows[0];
};

const deleteInquiry = async (id) => {
    await db.query('DELETE FROM inquiries WHERE id = $1', [id]);
};

module.exports = {
    getInquiries,
    getInquiryById,
    createInquiry,
    updateInquiry,
    deleteInquiry,
};
