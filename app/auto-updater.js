const {autoUpdater} = require('electron');
const ms = require('ms');

const notify = require('./notify'); // eslint-disable-line no-unused-vars
const {version} = require('./package');

// accepted values: `osx`, `win32`
// https://nuts.gitbook.com/update-windows.html
const platform = process.platform === 'darwin' ?
  'osx' :
  process.platform;
const FEED_URL = `https://hyper-updates.now.sh/update/${platform}`;
let isInit = false;

function init() {
  isInit = true;
}

module.exports = function (win) {
};
