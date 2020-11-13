let SSL_KEY = __dirname + '/certs/key.pem';
let SSL_CERT = __dirname + '/certs/certificate.pem';
// let MONGOURL = 'mongodb://admin:admin123@ds241055.mlab.com:41055/iotfwjs';
// let MONGOURL = 'mongodb://admin:aaa123456@ds253398.mlab.com:53398/datatest';
let MONGOURL = 'mongodb://mongo:27017/smarthome'

module.exports = {
    id: 'broker',
    stats: false,
    port: 8443,
    logger: {
        name: 'iotfwjs',
        level: 'debug'
    },
    secure: {
        keyPath: SSL_KEY,
        certPath: SSL_CERT,
    },
    backend: {
        type: 'mongodb',
        url: MONGOURL
    },
    persistence: {
        factory: 'mongo',
        url: MONGOURL
    }
};
