const spawn = require('child_process').spawn;

function startEmulatorVerbose(emulatorPath, avdName) {
  return new Promise((resolve, reject) => {
    const emulatorProcess = spawn(emulatorPath, ['-avd', avdName, '-verbose'], {
      stdio: 'inherit'
    });

    emulatorProcess.on('error', reject);
    emulatorProcess.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Emulator exited with code ${code}`));
      }
    });
  });
}

async function main() {
  const emulatorPath = process.env.ANDROID_HOME + "/emulator/emulator"; // Or use the path appropriate for your setup
  const avdName = 'my_avd'; // Replace with your AVD name

  try {
    console.log('Starting emulator...');
    await startEmulatorVerbose(emulatorPath, avdName);
    console.log('Emulator started successfully.');
  } catch (error) {
    console.error('Error starting emulator:', error);
  }
}

main();