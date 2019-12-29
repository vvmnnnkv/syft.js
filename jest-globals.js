import * as tf from '@tensorflow/tfjs';
const tensor = tf.tensor;
jest.spyOn(tf, 'tensor').mockImplementation((values, shape, dtype) => {
  let t = tensor(values, shape, dtype);
  // override id so it always returns same value
  Object.defineProperty(t, 'id', {
    value: 42
  });
  return t;
});