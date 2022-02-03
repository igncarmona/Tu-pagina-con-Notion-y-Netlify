const NotionPageToHtml = require("notion-page-to-html");
const fs = require("fs");

const html = NotionPageToHtml.convert(
  "https://sulfuric-canoe-a76.notion.site/19b44c6e26c543e58db57c0baacd8334?v=8b0c647f68914499a02cb283ef690cdb"
).then((result) => createHTMLFile(result, "index.html"));

function createHTMLFile(content, fileName) {
  const html = content.html;
  var stream = fs.createWriteStream(fileName);
  stream.once("open", function (fd) {
    stream.end(html);
  });
}
