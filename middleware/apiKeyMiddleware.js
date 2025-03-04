const apiKey = process.env.API_KEY;

function checkApiKey(req, res, next) {
    const userApiKey = req.header('x-api-key');
    if (userApiKey !== apiKey) {
        return res.status(403).json({ error: 'Geen geldige API key' });
    }
    next();
}

module.exports = checkApiKey;
