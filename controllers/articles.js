// Require Model
const Article = require("../models/Article");

// Require Moment
const moment = require('moment');

exports.article_create_get = (req, res) =>{
    res.render("article/add");
}

exports.article_create_post = (req, res) => {
    console.log(req.body);
    let article = new Article(req.body);

    // Save article
    article.save()
    .then(()=>{
        res.redirect("/article/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later");
    });
}

// HTTP GET - Article Index
exports.article_index_get = (req, res) => {
    Article.find()
    .then(articles => {
        res.render("article/index", {articles, moment})
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - Article by ID
exports.article_show_get = (req, res) => {
    console.log(req.query.id);
    Article.findById(req.query.id)
    .then(article => {
        res.render("article/detail", {article, moment})
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - Load Article Edit Form
exports.article_edit_get = (req, res) => {
    Article.findById(req.query.id)
    .then(article => {
        res.render("article/edit", {article});
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP PUT - Article Update
exports.article_update_put = (req, res) => {
    console.log(req.body.id);
    Article.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/article/index");
    })
    .catch(err => {
        console.log(err)
    });
}

  // HTTP DELETE -  Article
  exports.article_delete_get = (req, res) => {
    console.log(req.query.id);
    Article.findByIdAndDelete(req.query.id)
    .then(()=>{
        res.redirect("/article/index");
    })
    .catch(err => {
        console.log(err);
    })
};