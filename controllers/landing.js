const models = require('../models')

exports.get_landing = function(req, res, next) {
  res.render('landing', { title: 'Landing Page' });
}

exports.submit_lead = function(req, res, next) {
  //console.log("Lead email: ", req.body.lead_email);

  return models.Lead.create({
    email: req.body.lead_email
  }).then(lead => {
    res.redirect('/landing/leads');
  })
  //res.redirect('/landing');
} 

exports.show_leads = function(req, res, next) {
  return models.Lead.findAll().then(leads => {
    res.render('landing', {title: 'Show Leads', leads: leads});
  })
}

exports.show_lead = function(req, res, next) {
  return models.Lead.findOne({
    where : {
      id: req.params.lead_id
    }
  }).then(lead => {
      res.render('lead', {lead:lead});
  })
}