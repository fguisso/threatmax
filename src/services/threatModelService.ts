import { IThreatModelData, IThreatModelFilter, ThreatModelError } from '../domain/threatModel';
import * as ThreatModelRepository from '../data/repositories/threatModelRepository';

export class ThreatModelService {
    async createThreatModel(data: IThreatModelData): Promise<IThreatModelData> {
        try {
            return await ThreatModelRepository.createThreatModel(data);
        } catch (error) {
            throw new ThreatModelError(`Error creating Threat Model: ${error}`);
        }
    }

    async getThreatModelById(id: string): Promise<IThreatModelData | null> {
        try {
            return await ThreatModelRepository.getThreatModelById(id);
        } catch (error) {
            throw new ThreatModelError('Error retrieving Threat Model');
        }
    }

    async updateThreatModel(id: string, data: IThreatModelData): Promise<IThreatModelData | null> {
        try {
            return await ThreatModelRepository.updateThreatModel(id, data);
        } catch (error) {
            throw new ThreatModelError('Error updating Threat Model');
        }
    }

    async deleteThreatModel(id: string): Promise<void> {
        try {
            await ThreatModelRepository.deleteThreatModel(id);
        } catch (error) {
            throw new ThreatModelError('Error deleting Threat Model');
        }
    }

    async listThreatModels(page: number, limit: number): Promise<IThreatModelData[]> {
        try {
            return await ThreatModelRepository.listThreatModels(page, limit);
        } catch (error) {
            throw new ThreatModelError('Error listing Threat Models');
        }
    }

    async searchThreatModels(filter: IThreatModelFilter, page: number, limit: number): Promise<IThreatModelData[]> {
        try {
            return await ThreatModelRepository.searchThreatModels(filter, page, limit);
        } catch (error) {
            throw new ThreatModelError('Error searching Threat Models');
        }
    }
}