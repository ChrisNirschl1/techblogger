const express = require('express');
const router = express.Router();
const { Comment } = require('../../models/');

router.get("/", (req, res) => {
    Comment.findAll()
        .then(commentData => {
            res.json(commentData);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ err });
        });
});

router.get("/:id", (req, res) => {
    Comment.findByPk(req.params.id)
        .then(singleComment => {
            if (singleComment) {
                res.json(singleComment);
            } else {
                res.status(404).json({ err: " no opinion was found." })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err });
        });
});

router.post("/", (req, res) => {
    if (!req.session.user) {
        return res.status(403).json({ err: "Login required." })
    }
    Comment.create({
        like: req.body.like,
        review: req.body.review,
        // user_id: req.body.user_id,
        //maybe user.id?????
        // post_id: req.body.post_id,
        //maybe post.id?????
        UserId: req.session.user.id,
    PostId: req.body.LaCroixId
    })
        .then(newComment => {
            res.json(newComment);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ err });
        });
});

router.put("/:id", (req, res) => {
    if (!req.session.user) {
        return res.status(403).json({ err: "Login  required." })
    }
    Comment.findByPk(req.params.id)
        .then(foundComment => {
            if (req.session.user.id !== foundComment.UserId) {
                return res.status(403).json({ err: "This review cannot be edited." })
            }

            Comment.update(
                {
                    like: req.body.like,
                    review: req.body.review,
                    //maybe user.id?????
                    PostId: req.body.PostId
                    //maybe post.id?????
                },
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
                .then(updatedComment => {
                    if (updatedComment[0]) {
                        res.json(updatedComment)
                    } else {
                        res.status(404).json({ err: "There were no posts found!" })
                    }
                })
                .catch(err => {
                    console.error(err);
                    res.status(500).json({ err });
                });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ err });
        });
});

router.delete("/:id", (req, res) => {
    if (!req.session.user) {
        return res.status(403).json({ err: "Login is required." });
    }
    Comment.findByPk(req.params.id).then(foundComment => {
        if (req.session.user.id !== foundComment.UserId) {
            return res.status(403).json({ err: "not your Comment!" });
        }
        Comment.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(deletedComment => {
                if (deletedComment) {
                    res.json(deletedComment);
                } else {
                    res.status(404).json({ err: "Comment could not be found." })
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ err });
            });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err });
        });;
});

module.exports = router;