// Event triggered when a Threat Model is created
export class ThreatModelCreatedEvent {
    constructor(public readonly threatModelId: string) { }
}

// Event triggered when a Threat Model is updated
export class ThreatModelUpdatedEvent {
    constructor(public readonly threatModelId: string) { }
}

// Event triggered when a Threat Model is deleted
export class ThreatModelDeletedEvent {
    constructor(public readonly threatModelId: string) { }
}