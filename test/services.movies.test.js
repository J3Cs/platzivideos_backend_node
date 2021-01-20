const assert = require('assert');
const proxyquire = require('proxyquire');

const {
    MongoLibMock,
    getAllStub
} = require('../utils/mocks/MongoLib');
const {
    moviesMock
} = require('../utils/mocks/MOCK_DATA');

describe("services - movies", function () {
    const MoviesService = proxyquire('../services/movies', {
        '../lib/mongo': MongoLibMock
    });

    const moviesService = new MoviesService();

    describe('when getMovies method is called', async () => {
        it('should call the getall MongoLib method', async () => {
            await moviesService.getMovies({});
            assert.strictEqual(getAllStub.called, true)
        });

        it('should return a movie\'s array', async () => {
            const result = await moviesService.getMovies({});
            const expected = moviesMock;
            assert.deepEqual(result, expected);
        })
    });

})