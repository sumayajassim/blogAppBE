const express = require('express');

const router = express.Router();

router.use(express.json());

let methodOverride = require("method-override");
router.use(methodOverride('_method'));

// Require isLoggedIn
const isLoggedIn = require("../helper/isLoggedIn");

// Controller
const authorCntrl = require("../controllers/authors");

// Routes
router.get("/author/add", authorCntrl.author_create_get);
router.post("/author/add", isLoggedIn, authorCntrl.author_create_post);

router.get("/author/index", authorCntrl.author_index_get);
router.get("/author/detail", authorCntrl.author_show_get);

router.get("/author/edit", isLoggedIn, authorCntrl.author_edit_get);
router.put("/author/update", isLoggedIn, authorCntrl.author_update_put);

router.delete("/author/delete", isLoggedIn, authorCntrl.author_delete_get);

module.exports = router;