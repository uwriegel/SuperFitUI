
export interface INative {
    getState(): string
    doHapticFeedback(): void
    finish(): void
    start(): void
    stop(): void
    reset(): void
    display(): void
    fillTracks(): void
    fillMaps(): void
    onTrackSelected(number: Number): void
    onMapSelected(map: string): void
}

export enum ServiceState {
    Stopped = "Stopped",
    Starting = "Starting",
    Started = "Started",
    Stopping = "Stopping"
}
