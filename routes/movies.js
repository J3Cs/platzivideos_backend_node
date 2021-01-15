const express = require('express');
const { moviesMock } = require('../MOCK_DATA');

 function moviesApi(app) {
     const router = express.Router();
     app.use ("/api/movies", router);

     router.get("/", async (req, res, next) => {
        try {
            const movies = await Promise.resolve(moviesMock);
            res.status(200).json({
                data: movies,
                message: 'movies listed'
            })
        } catch (error) {
            next(err);
        }
     })
     router.get("/:movieId", async (req, res, next) => {
        try {
            console.log(moviesMock[0]);
            const movie = await Promise.resolve(moviesMock[0]);
            res.status(200).json({
                data: movie,
                message: 'movies retrieved'
            })
        } catch (error) {
            next(err);
        }
     })
     router.post("/", async (req, res, next) => {
        try {
            const createdMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(201).json({
                data: createdMovieId,
                message: 'movies created'
            })
        } catch (error) {
            next(err);
        }
     })
     router.put("/:movieId", async (req, res, next) => {
        try {
            const updatedMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({ 
                data: updatedMovieId,
                message: 'movies updated'
            })
        } catch (error) {
            next(err);
        }
     })
     router.delete("/", async (req, res, next) => {
        try {
            const deletedMovie = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data: deletedMovie,
                message: 'movies listed'
            })
        } catch (error) {
            next(err);
        }
     })
 }

 module.exports = moviesApi;