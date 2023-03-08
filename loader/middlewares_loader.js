import express from 'express';

/**
 * Adds middlewares to the given express application.
 * @param {express.Express} app The express application.
 */
const middlewares = (app) => {
  app.use(express.json({ limit: '200mb' }));
};

export default middlewares;
