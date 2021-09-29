export default class DepthCalculator {
  calculateDepth(arr) {
    let i = 1, depth = 1;

    for (let value of arr) {
      if (Array.isArray(value)) {
        i = this.calculateDepth(value) + 1;
      }
      depth = Math.max(i, depth);
    }

    return depth;
  }
}
