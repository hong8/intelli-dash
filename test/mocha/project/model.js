'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Project = mongoose.model('Project');

//Globals
var user;
var project;

//The tests
describe('<Unit Test>', function() {
    describe('Model Project:', function() {
        beforeEach(function(done) {
            user = new User({
                name: 'Full name',
                email: 'test@test.com',
                username: 'user',
                password: 'password'
            });

            user.save(function() {
                project = new Project({
                    title: 'Project Title',
                    content: 'Project Content',
                    user: user
                });

                done();
            });
        });

        describe('Method Save', function() {
            it('should be able to save without problems', function(done) {
                return project.save(function(err) {
                    should.not.exist(err);
                    done();
                });
            });

            it('should be able to show an error when try to save without title', function(done) {
                project.title = '';

                return project.save(function(err) {
                    should.exist(err);
                    done();
                });
            });
        });

        afterEach(function(done) {
            Project.remove({});
            User.remove({});
            done();
        });
        after(function(done) {
            Project.remove().exec();
            User.remove().exec();
            done();
        });
    });
});