const Player = require('mongoose').model('Player');
const { Http } = require('@status/codes');

module.exports = {
  // retrieving all of a resource(books: Book[])
  index(_req, res) {
    Player.find({})
      .then(players => res.json(players))
      .catch(error => res.status(Http.InsufficientStorage).json(error));
  },

  // create a resource
  create(req, res) {
    console.log('on create', req.body);
    Player.create(req.body)
      .then(player => res.json(player))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        res.status(Http.UnprocessableEntity).json(errors);
      });
  },

  // retrieve a single resource
  show(req, res) {
    const { player_id: playerId } = req.params;
    Player.findById(playerId)
      .then(player => res.json(player))
      .catch(error => res.status(Http.UnavailableForLegalReasons).json(error));
  },

  // update a single resource
  update(req, res) {
    const { player_id: playerId } = req.params;
    Player.findByIdAndUpdate(playerId, req.body, { new: true })
      .then(player => res.json(player))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        res.status(Http.UnprocessableEntity).json(errors);
      });
  },

  // destroy/delete/remove a single resource
  destroy(req, res) {
    const { player_id: playerId } = req.params;
    Player.findByIdAndRemove(playerId)
      .then(player => res.json(player))
      .catch(error => res.status(Http.ResetContent).json(error));
  },

  updateStatusForGame(req, res) {
    const { status: Status } = req.params;
    console.log('req.params: ', req.params);

    Player.updateMany({}, { $set: { status: Status } }, { multi: true })
      .then(players => res.json(players))
      .catch(error => res.status(Http.UnprocessableEntity).json(error));
  },

  updateStatus(req, res) {
    const { player_id: playerId } = req.params;
    console.log('req.body: ', req.body);
    console.log('req.pasassarams: ', req.params);
    Player.findOneAndUpdate(playerId, req.body, { new: true })
      .then(player => res.json(player))
      .catch(error => res.status(Http.Unauthorized).json(error));
  },
};
