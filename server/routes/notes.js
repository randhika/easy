

module.exports = function(express, notesController) {

   const router = express.Router();
    router.post('/note', (req, res) => {
        notesController.addNote(req.body, (err, note) => {
            if(err) throw err;
            res.json(note);
        });
    });

   return router;
}
