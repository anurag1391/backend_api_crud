const express = require('express');
const router = express.Router();
const inquiriesController = require('../controllers/inquiriesController');

router.get('/', inquiriesController.getInquiries);
router.get('/:id', inquiriesController.getInquiryById);
router.post('/', inquiriesController.createInquiry);
router.put('/:id', inquiriesController.updateInquiry);
router.delete('/:id', inquiriesController.deleteInquiry);

module.exports = router;
