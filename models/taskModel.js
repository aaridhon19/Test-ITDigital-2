// Array untuk menyimpan dalam tugas di dalam memori
let tasks = [];

// Counter untuk membuat id tugas yang unik
let idCounter = 1;

class Task {
    constructor(title, description) {
        this.id = idCounter++;
        this.title = title;
        this.description = description;
    }

    // Method untuk membuat tugas baru
    static create(data) {
        // Objek task yang baru 
        const task = new Task(data.title, data.description);
        // Menambahkan tugas yang baru ke dalam array
        tasks.push(task);
        return task;
    }

    // Method untuk melihat semua tugas yang ada di dalam memori
    static findAll() {
        return tasks;
    }

    // Method untuk mencari tugas berdasarkan id
    static findById(id) {
        return tasks.find(task => task.id === Number(id));
    }

    // Method untuk memperbarui tugas berdasarkan id
    static updateById(id, data) {
        const task = tasks.find(task => task.id === Number(id));
        if (task) {
            // Memperbarui title atau description dari tugas
            task.title = data.title || task.title;
            task.description = data.description || task.description;
        }
        return task;
    }

    // Method untuk menghapus tugas berdasarkan id
    static deleteById(id) {
        const index = tasks.findIndex(task => task.id === Number(id));
        if (index !== -1) {
            // Menghapus tugas dari array
            return tasks.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = {Task};
