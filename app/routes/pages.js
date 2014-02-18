'use strict';

// Pages routes use pages controller
var projects = require('../controllers/projects');
var pages = require('../controllers/pages');
var authorization = require('./middlewares/authorization');

// Article authorization helpers
var hasAuthorization = function(req, res, next) {
	if (req.page.owner.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app) {

    app.get('/projects/:projectId/pages', pages.all);
    app.post('/projects/:projectId/pages', authorization.requiresLogin, pages.create);
    app.get('/projects/:projectId/pages/:pageId', pages.show);
    app.put('/projects/:projectId/pages/:pageId', authorization.requiresLogin, hasAuthorization, pages.update);
    app.del('/projects/:projectId/pages/:pageId', authorization.requiresLogin, hasAuthorization, pages.destroy);

    // Finish with setting up the pageId, pageId param
    app.param('projectId', projects.project);
    app.param('pageId', pages.page);

};