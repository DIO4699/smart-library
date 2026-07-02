const swaggerJsDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",

        info: {
            title: "Smart Library API",
            version: "1.0.0",
            description: "Library management API",
        },

        servers: [
            {
                url: "http://localhost:3000",
            },
        ],

        components: {
            schemas: {
                Book: {
                    type: "object",
                    properties: {
                        title: {
                            type: "string",
                        },
                        author: {
                            type: "string",
                        },
                    },
                },
            },
        },
    },

    apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;