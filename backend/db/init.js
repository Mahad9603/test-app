import sequelize from "./config.js";

const syncDb = async () => {
    await sequelize.sync({ alter: true, force: false });

    console.log("Models created");
}

export default syncDb;