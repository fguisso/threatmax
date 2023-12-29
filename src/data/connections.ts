import mongoose from 'mongoose';
import config from '../../app-config';
import logger from '../libs/logger';

const connectToMongoDB = async () => {
    try {
        const dbUri = config.database.uri;
        await mongoose.connect(dbUri);
        logger.info('Connected to MongoDB');
    } catch (error) {
        logger.error('Could not connect to MongoDB', error);
        process.exit(1);
    }
};

export default connectToMongoDB;