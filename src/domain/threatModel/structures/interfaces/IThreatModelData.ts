import { Document } from "mongoose";

export interface IThreatModelData extends Document {
    name: string;
    description: string;
    author: string;
    appOwner: string;
    entities: EntityData[];
    processes: ProcessData[];
    databases: DatabaseData[];
    boundaries: BoundaryData[];
    assets: AssetData[];
    threats: ThreatData[];
    dataflowName: string;
    dataflowCode: string;
}

interface EntityData {
    name: string;
}

interface ProcessData {
    name: string;
}

interface DatabaseData {
    name: string;
}

interface BoundaryData {
    name: string;
}

interface AssetData {
    name: string;
}

interface ThreatData {
    name: string;
    reportedAt: Date;
    resolved: boolean;
    resolvedAt: Date;
    impact: number;
    probability: number;
    comments: string;
    controls: ControlData[];
    extraControls: ControlData[];
}

interface ControlData {
    name: string;
    description: string;
    resolved: boolean;
    resolvedAt: Date;
}