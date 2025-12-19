require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { connectDB } = require("./config/database");
const schema = require("./graphql/schema");
const userResolvers = require("./modules/users/user.resolvers");
const productResolvers = require("./modules/products/product.resolvers");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await connectDB();

    app.use(express.json());

    const rootValue = {
      ...userResolvers,
      ...productResolvers,
    };

    app.use(
      "/graphql",
      graphqlHTTP({
        schema: schema,
        rootValue: rootValue,
        graphiql: true,
        customFormatErrorFn: (error) => ({
          message: error.message,
          locations: error.locations,
          path: error.path,
        }),
      })
    );

    app.get("/", (req, res) => {
      res.json({
        message: "Api Graphql CRUD con mysql",
        graphql: `htttp:localhost:${PORT}/graphql`,
        documentation: "visita /graphql para usar  GraphiQL",
        database: "Mysql + sequelize",
      });
    });

    app.post("/health", (req, res) => {
      res.json({
        status: "ok",
        timestamp: new Date().toISOString,
        uptime: process.uptime(),
      });
    });

    app.use(errorHandler);

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
      console.log(`GraphiQL disponible en http://localhost:${PORT}/graphql`);
      console.log(`Base de datos: MySQL`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
  }
};

startServer();
