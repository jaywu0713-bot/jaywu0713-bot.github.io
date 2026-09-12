const http=require('http'),fs=require('fs'),path=require('path');
const root=process.cwd(),types={'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.glb':'model/gltf-binary'};
http.createServer((req,res)=>{const file=path.join(root,(req.url||'/').split('?')[0]==='/'?'index.html':(req.url||'/').split('?')[0]);fs.readFile(file,(err,data)=>{if(err){res.statusCode=404;return res.end('Not found')}res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');res.end(data)})}).listen(8000);
