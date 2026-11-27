import express from 'express';
const app = express();

app.get('/api/auth/login', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'api successfully running.'
    })
});

export default app