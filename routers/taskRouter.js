const express = require('express');
const router = express.Router();
const {TaskController} = require('../controllers/taskController');

// Route untuk membuat Proyek baru
router.post('/', TaskController.createTask);

// Route untuk melihat seluruh Proyek
router.get('/', TaskController.readTask);

// Route untuk melihat Proyek sesuai dengan Id Proyek
router.get('/:id', TaskController.readTaskById);

// Route untuk mengupdate Proyek sesuai dengan Id Proyek
router.put('/:id', TaskController.updateTask);

// Route untuk menghapus Proyek sesuai dengan Id Proyek
router.delete('/:id', TaskController.deleteTask);

module.exports = router;
