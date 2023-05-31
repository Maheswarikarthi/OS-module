const os = require('os');
console.log("CPU architecture: " + os.arch());
console.log("Free memory: " + os.freemem());
console.log("Total memory: " + os.totalmem());
console.log('List of network Interfaces: ' + os.networkInterfaces());
console.log('OS default directory for temp files : ' + os.tmpdir());
console.log("Endianness of system: " + os.endianness());
console.log("Hostname: " + os.hostname());
console.log("Operating system name: " + os.type());
console.log('operating system platform: ' + os.platform());
console.log('OS release : ' + os.release());
console.log('tmpdir : ' + os.tmpdir());
console.log('uptime : '+os.uptime())
console.log('loadavg : '+os.loadavg())
console.log('cpus : '+os.cpus())

