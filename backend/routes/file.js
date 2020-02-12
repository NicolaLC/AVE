const express = require('express');
const router = express.Router();
const fs = require('fs');
module.exports = router
// Create one editor setting
router.post('/file/save', async (req, res) => {
    try {
        const { path, content } = req.body;
        await fs.writeFile(path, content, async (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: err.message });
            }
            console.log('FILE UPLOADED');
            res.json({ message: 'File saved' });
        });
        res.json({ message: 'File updated succesfully' });
    } catch {
        res.status(500).json({ message: err.message });
    }
})