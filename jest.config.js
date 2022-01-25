// import '@testing-library/jest-dom'

// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    verbose: true,
  };
  
  module.exports = config;
  
  // Or async function
  module.exports = async () => {
    return {
      verbose: true,
      setupFilesAfterEnv: ['<TEXAS_HOLDEM>/jest-setup.js']
    };
  };
    