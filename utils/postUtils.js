function generateUniquePost(titlePrefix = 'This is Post ', description = 'This is my description', body = 'This is body') {
    const random = Math.floor(Math.random() * 10000);
    const title = `${titlePrefix} ${random}`;
    const desc = `${description} ${random}`;
    const content = `${body} ${random}`;
  
    return { title, desc, content };
  }
  
  module.exports = { generateUniquePost };
  