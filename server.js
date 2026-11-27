
const PORT = 3000;

const startServer = async () => {
    const app = (await import('./app.js')).default;

    const server = app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on http://0.0.0.0:${PORT}`, 'Server');
    });

    const shutdown = () => {
        console.log('Shutting down server...', 'Server');
        server.close(() => {
            console.log('Server shutdown complete', 'Server');
            process.exit(0);
        });
    };

    process.on('SIGTERM', () => {
        shutdown();
    });
    process.on('SIGINT', () => {
        shutdown();
    });
};

startServer().catch((err) => {
    console.log('Failed to start server', 'Server', err);
    process.exit(1);
});
