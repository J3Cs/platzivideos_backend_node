const assert = require('assert');
const proxyquire = require('proxyquire');
const { moviesMock, filteredMoviesMocks, moviesServiceMock} = require('../utils/mocks/MOCK_DATA');
const testServer = require('../utils/testServer');

describe('routes - movies', function(){
    const route = proxyquire('../routes/movies', {
        '../services/movies': moviesServiceMock
    });

    const request = testServer(route);

    describe('GET /movies', function() {
        it('should respond with status 200', function(done) {
           request.get('/api/movies').expect(200, done);
        })    
        it('should respond with movie\'s list', function(done) {
            request.get('/api/movies').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: moviesMock,
                    message: 'movies listed'
                });
                done();
            });
         })    
    })
})