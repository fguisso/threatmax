export class ThreatModelError extends Error {
    constructor(message: string, public readonly code: number = 400) {
        super(message);
        this.name = 'ThreatModelError';
        Object.setPrototypeOf(this, ThreatModelError.prototype);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ThreatModelError);
        }
    }
}