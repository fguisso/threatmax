import app from './presentation/app';
import config from '../app-config';
import connectToMongoDB from './data/connections';

const PORT = Number(config.server.port);
const HOST = config.server.host;

app.listen(PORT, HOST, async () => {
    await connectToMongoDB();
    console.log(`Server running on http://localhost:${PORT}`);
});