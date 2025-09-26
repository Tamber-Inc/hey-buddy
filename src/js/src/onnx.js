/** @module onnx */
import * as ort from 'onnxruntime-web';

/**
 * Wrapper for ONNX Runtime Web API.
 */
export class ONNX {
    /**
     * Create a new tensor.
     * @param {string} dtype The data type of the tensor.
     * @param {Array<number>} data The data of the tensor.
     * @param {Array<number>} dims The dimensions of the tensor.
     * @returns {Promise<ort.Tensor>} A promise that resolves to a new tensor.
     */
    static async createTensor(dtype, data, dims) {
        return new ort.Tensor(dtype, data, dims);
    }

    /**
     * Create a new inference session.
     * @param {ArrayBuffer} model The model to load.
     * @param {Object} [options] The options for the inference session.
     * @returns {Promise<ort.InferenceSession>} A promise that resolves to a new inference session.
     */
    static async createInferenceSession(model, options = {}) {
        return await ort.InferenceSession.create(model, options);
    }
}
