const { yuqueInit } = require('./src/modules/yuqueInit');
const { configInit } = require('./src/modules/common');
const { webhook }  = require('./src/modules/webhook');

global._logger = require('./src/utils/logger');

// return 
try {

  configInit()

  webhook()

  yuqueInit()

  setInterval(() => {

    yuqueInit()

  }, 1000*60*60*24)


} catch (error) {

  _logger.error(error);

}
