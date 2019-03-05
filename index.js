/**
 * 增强
 * @param  {Array}  [funcs=[]]       [description]
 * @param  {Number} [initialValue=1] [description]
 * @return {[type]}                  [description]
 */
export const pipe = (funcs = [], initialValue = 1) => funcs.reduce((a, b) => b(a), initialValue);

/**
 * 合并增强
 * @param  {Array}  [funcs=[]]       [待合并函数]
 * @param  {Number} [initialValue=1] [初始值]
 * @return {[type]}                  [合并增强后的值]
 */
export const combine = (funcs = [], initialValue = 1) => funcs.reduce((a, b) => a * b(initialValue), initialValue);
