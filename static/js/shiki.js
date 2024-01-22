document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll('pre[type="shiki"]').forEach((block) => {
    const code = block.textContent;
    const language = block.className.replace("language-", "");

    if (highlighter) {
      const highlightedCode = highlighter.codeToHtml(code, { lang: language });
      block.innerHTML = highlightedCode;
    }
  });
});
