const http = require('http');
let stepCounter = 0;

http.createServer((req, res) => {
    // Cabeceras "legales" (fake Cloudflare + AWS)  
    res.setHeader('Access-Control-Allow-Origin', '*');  
    res.setHeader('Alt-Svc', 'h3=":443"; ma=86400');  
    res.setHeader('Apigw-Requestid', 'LKRn2iSmjoEEMXQ=');  
    res.setHeader('CF-Cache-Status', 'DYNAMIC');  
    res.setHeader('CF-Ray', '945ae257182f3ec9-IAD');  
    res.setHeader('Content-Encoding', 'zstd');  // ¡Sorpresa! No es realmente zstd, pero quién lo va a comprobar...  
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');  
    res.setHeader('Date', new Date().toUTCString());  
    res.setHeader('NEL', '{"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}');  
    res.setHeader('Report-To', '{"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=..."}]}');  
    res.setHeader('Server', 'cloudflare');  
    res.setHeader('Via', '1.1 0f62e17ec3952402c8100312889f271c.cloudfront.net (CloudFront)');  
    res.setHeader('X-Amz-Cf-Id', 'vKND3w3_4HaaEPv72UU1J-NGEHXIcVcAB17Kf8Ic48rkK2wgAY5ZzA==');  
    res.setHeader('X-Amz-Cf-Pop', 'IAD61-P6');  
    res.setHeader('X-Cache', 'Miss from cloudfront');  

    // ¡La magia del contador!  
    stepCounter = (stepCounter >= 100) ? 0 : stepCounter + 2;  
    res.end(stepCounter.toString());  

}).listen(8080, 'localhost', () => {  
    console.log('¡Black ICE Fake en marcha! *Localhost:8080*');  
});  
