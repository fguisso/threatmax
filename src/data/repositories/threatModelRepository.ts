import { Schema, model } from 'mongoose';
import { IThreatModelData } from '../../domain/threatModel';

const ThreatModelSchema = new Schema<IThreatModelData>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  appOwner: { type: String, required: true },
  entities: [{
    name: String
  }],
  processes: [{
    name: String
  }],
  databases: [{
    name: String
  }],
  boundaries: [{
    name: String
  }],
  assets: [{
    name: String
  }],
  threats: [{
    name: String,
    reportedAt: Date,
    resolved: Boolean,
    resolvedAt: Date,
    impact: Number,
    probability: Number,
    comments: String,
    controls: [{
      name: String,
      description: String,
      resolved: Boolean,
      resolvedAt: Date
    }],
    extraControls: [{
      name: String,
      description: String,
      resolved: Boolean,
      resolvedAt: Date
    }]
  }],
  dataflowName: { type: String, required: true },
  dataflowCode: { type: String, required: true }
});

const ThreatModel = model<IThreatModelData>('ThreatModel', ThreatModelSchema);

export const getThreatModelById = async (id: string) => {
  return await ThreatModel.findById(id);
};

export const createThreatModel = async (data: IThreatModelData) => {
  const threatModel = new ThreatModel(data);
  return await threatModel.save();
};

export const listThreatModels = async (page: number = 1, limit: number = 10) => {
    return await ThreatModel.find({})
                            .skip((page - 1) * limit)
                            .limit(limit);
};

export const searchThreatModels = async (query: any, page: number, limit: number) => {
    const searchQuery = {
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } }
      ]
    };
    return await ThreatModel.find(searchQuery)
                            .skip((page - 1) * limit)
                            .limit(limit);
};

export const updateThreatModel = async (id: string, data: Partial<IThreatModelData>) => {
  return await ThreatModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteThreatModel = async (id: string) => {
  return await ThreatModel.findByIdAndDelete(id);
};

export const getAllThreatModels = async () => {
  return await ThreatModel.find({});
};