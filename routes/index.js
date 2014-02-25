module.exports = function Route(app){
  app.get('/', function(req, res){
    res.render('index', {title:'Submitting Form', session_data:req.session});
  });
  app.get('/result.ejs', function(req, res){
    res.render('result', {title:'Form Result', session_data:req.session});
  });
  app.post('/process', function(req, res){
    console.log('POST INFO', req.body);
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language; 
    req.session.comments = req.body.comments; 
    req.session.save(function() {
       res.redirect('/');
    });
  })
}
