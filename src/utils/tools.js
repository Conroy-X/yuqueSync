const got = require('got');
const moment = require('moment');
const prettier = require('prettier');

function formatRaw(body) {
  const multiBr = /(<br>[\s\n]){2}/gi;
  const multiBrEnd = /(<br \/>[\n]?){2}/gi;
  const brBug = /<br \/>/g;
  const hiddenContent = /<div style="display:none">[\s\S]*?<\/div>/gi;
  // 删除语雀特有的锚点
  const emptyAnchor = /<a name=".*?"><\/a>/g;
  const bodyFormat = body
    .replace(hiddenContent, '')
    .replace(multiBr, '<br>')
    .replace(multiBrEnd, '<br />\n')
    .replace(brBug, '\n')
    .replace(emptyAnchor, '');
  return prettier.format(bodyFormat, { parser: 'markdown' });
}


/**
 * 
 * @param {Object} str 
 * @returns 
 */
function loadYuqueBody(str = {}) {
  if(str.email === "21445738@qq.com") {
    _logger.error(str)
  }
  const body = formatRaw(str.body)
  _logger.error(str)
  const meta = {
    title: str.title,
    tags: ["null"],
    categories: "noCat",
    date: moment(str.published_at).format("YYYYMMDD_HHmmss"),
    author: 'rik',
    email: "21445738@qq.com",
    description:"",
    excerpt:''
  };
  const head = body.slice(0, body.indexOf('\n---') + 4);
  const content =  body.slice(body.indexOf('\n---') + 4).trim();
  head
    .split('\n')
    .slice(1, -1)
    .map(line => {
      const key = line.slice(0, line.indexOf(':'));
      const value = line.slice(key.length + 1).trim();
      if( value ) { 
        meta[key] = value
      }
      if(!meta.excerpt) {
        meta.excerpt = meta.description
      }
      return true;
    });
  const  meteArray = []
  Object.entries(meta).forEach(item => {
    meteArray.push(item.join(": "))
  })
  meteArray.push('---\n\n')
  meteArray.unshift('---')
  const metaStr = meteArray.join("\n")
  return { meta, content : metaStr+content };
}

const request = got.extend({
  hooks: {
    beforeRequest: [
      options => {
        // eslint-disable-next-line no-param-reassign
        options.headers['X-Auth-Token']= global.config.yuqueConfig.auth_token;
      },
    ],
  },
});

module.exports = {
  loadYuqueBody,
  request,
};
