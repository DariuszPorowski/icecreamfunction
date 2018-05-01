function uuid() {
  var uuid = "", i, random;
  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;

    if (i == 8 || i == 12 || i == 16 || i == 20) {
      uuid += "-"
    }
    uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
  }
  return uuid;
}

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log('Arthur earned  a subscription to puppies unite');
    req.body.id = uuid();

    context.bindings.outputDocument = JSON.stringify(req.body);
    
        context.res = {
            status: 200,
            body:  req.body
        };
        
    context.done();
};