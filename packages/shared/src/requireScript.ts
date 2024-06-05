/**
 * 通过tag标签加载依赖
 */
export function requireScript(src: string): Promise<void> {
  const headElement =
    document && (document.head || document.getElementsByTagName("head")[0]);

  return new Promise((resolve, reject) => {
    if (!document) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "react_baidu_map";
    script.src = src;
    // 加载和渲染后续文档元素的过程将和 script 的加载与执行并行进行
    script.async = true;
    // 加载后续文档元素的过程将和 script 的加载并行进行，但是 script 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成
    script.defer = true;
    script.onerror = (err) => {
      reject(err);
    };
    script.onload = () => {
      resolve();
    };
    
    headElement.appendChild(script);
  });
}
