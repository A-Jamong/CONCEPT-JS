function getNode(node, context = document) {
  // if (isString(context)) {
  //   context = document.querySelector(context);
  // }
  if (context.nodeType !== document.DOCUMENT_NODE) {
    //~context가 document가 아니면 쿼리셀렉터 돌려줘.
    context = document.querySelector(context);
  }
  return context.querySelector(node);
}
