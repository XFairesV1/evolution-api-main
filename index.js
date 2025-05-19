const { exec } = require("child_process");

process.env.N8N_PORT = process.env.PORT || 3000;

exec("npx n8n start", (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao iniciar o n8n: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
