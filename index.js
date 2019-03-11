/**
 * 递归增强
 * @param  {Array}  [funcs=[]]       [待增强函数集]
 * @param  {Number} [initialValue=1] [初始值]
 * @return {[type]}                  [增强后的值]
 */
export const pipe = (funcs = [], initialValue = 1) => funcs.reduce((a, b) => b(a), initialValue);

/**
 * 合并增强
 * @param  {Array}  [funcs=[]]       [待增强函数集]
 * @param  {Number} [initialValue=1] [初始值]
 * @return {[type]}                  [增强后的值]
 */
export const combine = (funcs = [], initialValue = 1) => funcs.reduce((a, b) => a * b(initialValue), initialValue);
