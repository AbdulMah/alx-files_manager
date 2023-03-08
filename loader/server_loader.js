import express from 'express';

/**
 * Sqrt server to the given express application.
 * @param {express.Express} app The express application.
 */
const serverLoader = (app) => {
  try {
    envLoader();
    const port = process.env.PORT || 5000;
    const env = process.env.npm_lifecycle_event || "dev";
    app.listen(port, () => {
      console.log(`[${env}] API has started listening at port:${port}`);
    });
  } catch (err) {
    console.log("Something wrong, application is not starting");
  }
};

export default serverLoader;

