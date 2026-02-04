declare module 'hey-buddy-onnx' {
  interface WakeWordModel {
    url: string;
    threshold: number;
  }

  interface HeyBuddyConfig {
    models: WakeWordModel[];
    vadModelPath?: string;
    embeddingModelPath?: string;
    spectrogramModelPath?: string;
    debug?: boolean;
    record?: boolean;
    mediaStream?: MediaStream;
  }

  export class HeyBuddy {
    constructor(config: HeyBuddyConfig);
    wakeWords: Record<string, any>;
    paused: boolean;
    onDetected(wakeWord: string | string[], callback: (detectedWakeWord: string) => void): void;
    onRecording(callback: (audio: Float32Array) => void): void;
    onProcessed(callback: (result: any) => void): void;
    onSpeechStart(callback: () => void): void;
    onSpeechEnd(callback: () => void): void;
    clearCallbacks(): void;
    pause(): void;
    unpause(): void;
    setMediaStream(stream: MediaStream): void;
  }
}
