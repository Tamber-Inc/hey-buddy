declare module 'hey-buddy-onnx' {
  interface HeyBuddyConfig {
    modelPath: string | string[];
    vadModelPath?: string;
    embeddingModelPath?: string;
    spectrogramModelPath?: string;
    wakeWordThreshold?: number;
    debug?: boolean;
    record?: boolean;
  }

  export class HeyBuddy {
    constructor(config: HeyBuddyConfig);
    wakeWords: Record<string, any>;
    paused: boolean;
    onDetected(wakeWord: string, callback: () => void): void;
    onRecording(callback: (audio: Float32Array) => void): void;
    onProcessed(callback: (result: any) => void): void;
    onSpeechStart(callback: () => void): void;
    onSpeechEnd(callback: () => void): void;
    pause(): void;
    unpause(): void;
  }
}
