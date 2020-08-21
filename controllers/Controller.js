const { People } = require("../models");

class Controller {
    static home(req, res){
        res.send("HOME");
    }

    static findAll(req, res){
        People.findAll()
        .then(people => {
            res.render("showAll", { people })
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
    }

    static addForm(req, res){
        res.render("addForm");
    }

    static addPost(req, res){
        const { firstname, lastname, age, address, ismale} = req.body;

        People.create({
            firstname, lastname, age, address, ismale
        })
        .then(result => {
            res.redirect("/peoples")
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
    }

    static delete(req, res){
        const id = req.params.id;

        People.destroy({
            where: {
                id
            }
        })
        .then(result => {
            res.redirect("/peoples")
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
    }

    static editForm(req, res){
        const id = req.params.id;

        People.findByPk(id)
        .then(people => {
            res.render("editForm", { people })
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
    }

    static editPost(req, res){
        const id = req.params.id;
        const { firstname, lastname, age, address, ismale} = req.body;

        People.update({
            firstname, lastname, age, address, ismale
        }, {
            where: {
                id 
            }
        })
        .then(result => {
            res.redirect("/peoples")
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
    }
}

module.exports = Controller