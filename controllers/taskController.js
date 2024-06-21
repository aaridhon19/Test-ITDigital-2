const { Task } = require('../models/taskModel');

class TaskController {
    // Method untuk membuat tugas baru 
    static async createTask(req, res) {
        try {
            // Mengambil inputan dari body
            const { title, description } = req.body;
            // Validasi inputan title
            if (!title) {
                return res.status(400).json({ message: "Title are required!" });
            }
            // Membuat tugas baru
            const newTask = await Task.create({ title, description });
            // Menampilkan pesan sukses dan data tugas yang telah di input
            res.status(201).json({message : `Task title ${title} success created`, Task : newTask});
        } catch (error) {
            // Menampilkan pesan error
            res.status(500).json({ message: error.message });
            console.log(error.message);
        }
    }

    // Method untuk melihat semua tugas
    static async readTask(req, res) {
        try {
            // Menampilkan semua tugas
            const getTask = await Task.findAll();
            // Validasi ketika tidak ada tugas sama sekali
            if(!getTask) {
                return res.status(404).json({ message: "There is no Task!" });
            }
            // Menampilkan data semua tugas
            res.status(200).json(getTask);
        } catch (error) {
            // Menampilkan pesan error
            res.status(500).json({ message: error.message });
            console.log(error.message);
        }
    }

    // Method untuk melihat tugas berdasarkan id
    static async readTaskById(req, res) {
        try {
            // Mengambil id tugas dari parameter
            const {id} = req.params;
            // Menampilkan tugas berdasarkan id
            const task = await Task.findById(id);
            // Validasi ketika tugas berdasarkan id tidak ditemukan
            if (!task) {
                return res.status(404).json({ message: `Task id ${id} was not found!` });
            }
            // Menampilkan pesan berhasil dan data tugas berdasarkan id
            res.status(200).json({message: `Task with id ${id}`, Task : task});
        } catch (error) {
            // Menampilkan pesan error
            res.status(500).json({ message: error.message });
            console.log(error.message);
        }
    }

    // Method untuk memperbarui tugas berdasarkan id
    static async updateTask(req, res) {
        try {
            // Mengambil id tugas dari parameter
            const {id} = req.params;
            // Menginput tugas dari body
            const { title, description } = req.body;
            // Validasi ketika input title tidak ada sama sekali
            if(!title) {
                return res.status(400).json({ message: "Title are required!" });
            }
            // Memperbarui tugas berdasarkan id
            const updateTask = await Task.updateById(id, { title, description });
            // Validasi ketika tugas berdasarkan id tidak ada
            if (!updateTask) {
                return res.status(404).json({ message: `Task id ${id} was not found!` });
            }
            // Menampilkan pesan memperbarui tugas berhasil dan data tugas berdasarkan idnya
            res.status(200).json({message : `Task id ${id} success updated`, Task : updateTask});
        } catch (error) {
            // Menampilkan pesan error
            res.status(500).json({ message: error.message });
            console.log(error.message);
        }
    }

    // Method untuk menghapus tugas berdasarkan id
    static async deleteTask(req, res) {
        try {
            // Mengambil id tugas dari parameter
            const {id} = req.params;
            // Menghapus tugas berdasarkan id
            const deleteTask = await Task.deleteById(id);
            // Validasi ketika tugas berdasarkan id tidak ada
            if (!deleteTask) {
                return res.status(404).json({ message: `Task id ${id} was not found!` });
            }
            // Menampilkan pesan berhasil menghapus tugas berdasarkan id dan data tugas yang telah dihapus
            res.status(200).json({message: `Task id ${id} success deleted` , Task : deleteTask});
        } catch (error) {
            // Menampilkan pesan error
            res.status(500).json({ message: error.message });
            console.log(error.message);
        }
    }
}

module.exports = {
    TaskController
};
