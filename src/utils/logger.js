const log4js = require("log4js");

log4js.configure({
    appenders: {
      multi: {
        type: 'multiFile',
        base: "logger",
        property: 'level',
        extension: '.log',
        maxLogSize: 104857600,
        backups: 30,
        compress: true,
      },
    },
    categories: {
      default: {
        appenders: ['multi'],
        level: "debug",
      },
    },
  });

module.exports = log4js.getLogger("default");