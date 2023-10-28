const os = require('os');
const networkInterfaces = os.networkInterfaces();

// Obtener la dirección IP de tu PC
const ipAddresses = networkInterfaces['Wi-Fi'] || networkInterfaces['Ethernet'];
const ipAddress = ipAddresses.find((iface) => iface.family === 'IPv4').address;
console.log(`Tu dirección IP es: ${ipAddress}`);

// Obtener información del sistema operativo
const osInfo = {
  Platform: os.platform(),
  Type: os.type(),
  Arch: os.arch(),
  Release: os.release(),
};
console.log('Información del sistema operativo:');
console.log(osInfo);
