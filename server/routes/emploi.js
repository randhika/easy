
module.exports = function(express, emploiController) {

   const router = express.Router();
  router.post('/seance', (req, res) => {
    emploiController.addSeance(req.body.groupeId, req.body.sectionId, req.body.day, req.body.seance, (err, result) => {
      if(err) throw err;
      res.json(result);
    });
  });

  router.get('/:section/:groupe', (req, res) => {
    emploiController.getTimeTable(req.params.section, req.params.groupe, (err, result) => {
      if(err) throw err;
      res.json(result);
    });
  });

  router.post('/delete-seance', (req, res) => {
    emploiController.deleteSeance(
      req.body.sectionId,
      req.body.groupeId,
      req.body.seanceId,
      req.body.teacherId,
      req.body.salleId,
      req.body.day,
      (err, result) => {
        if(err) throw err;
        res.json(result);
      });
  });


   return router;
}
