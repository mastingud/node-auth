const {authJwt} = require("../middleware");
const artilce = require("../controllers/article.controller.js");
const router =  require("express").Router();

module.exports = app => {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token,Origin,Content-Type,Accept"
        ) ;
 
        next(); 
    });
   

    //create
    app.post("/api/article", [authJwt.verifyToken],artilce.create);

    //retrieve all
    app.get("/api/article", [authJwt.verifyToken],artilce.findAll);

    //retrieve all published 
    app.get("/api/article/published", artilce.findAllPublished);

     //retrieve all article user
     app.get("/api/article/usercount", artilce.findArticleUser);
    
    //retrieve all user 
    app.get("/api/article/user/:id",[authJwt.verifyToken], artilce.findAllUser);

    //retrieve a single article
    app.get("/api/article/:id",[authJwt.verifyToken], artilce.findOne);

    //update
    app.put("/api/article/:id",[authJwt.verifyToken], artilce.update);

    //delete by id 
    app.delete("/api/article/:id", [authJwt.verifyToken],artilce.delete);

    //delete by id 
    app.delete("/api/article/user/:id", [authJwt.verifyToken],artilce.deleteUser);

    //delete all
    app.delete("/api/article/",[authJwt.verifyToken], artilce.deleteAll);

    // app.use('/api/article', router);
};