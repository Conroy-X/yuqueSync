const http = require("http");
const { syncWriteFile, delPost } =require('./common')


function route (req, repoName) {
    let rawStr = ""
    req.on('data', (chunk) => {
      rawStr += chunk.toString('utf8')
    });

    req.on('end', async () => {
        const json = JSON.parse(rawStr)
        _logger.info(`webhook ${json.data.title} start`, json)
        const {postDetial} = global.config
        if(postDetial[json.data.id].filePath) {
          await delPost(postDetial[json.data.id].filePath)
       }

        syncWriteFile(json.data, repoName)
    });
}

function webhook() {
  http.createServer((request, response) => {
    const path = request.url.split("?")[0]
    if(path.startsWith('/wisper/666/777')) {
      route(request, path.split("/").pop())
    }
    response.writeHead(403, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }).listen(3668);
}
 
exports.webhook = webhook;



