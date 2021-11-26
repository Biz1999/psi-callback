var Service = require("node-windows").Service;

// Create a new service object
var svc = new Service({
  name: "PSI Callback",
  description: "Callback para atualização dos estoques no Bling.",
  script: "C:\\Users\\alessandrob\\Documents\\PSI\\psi-api\\src\\server.js",
  workingDirectory: "C:\\Users\\alessandrob\\Documents\\PSI\\psi-api",
  //, workingDirectory: '...'
  //, allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on("install", function () {
  svc.start();
});

svc.install();
