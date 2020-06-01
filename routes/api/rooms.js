const express = require('express');
const router = express.Router();
const { getAllRooms } = require('../../utils/rooms');

// @route     GET api/rooms
// @desc      Get all active rooms
// @access    Public
router.get('/', async (req, res) => {
  const rooms = await getAllRooms();
  res.status(200).send({ rooms });
});

module.exports = router;
