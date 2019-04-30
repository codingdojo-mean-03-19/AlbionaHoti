const Task = require('mongoose').model('Task');
const { Http } = require('@status/codes');

module.exports = {
  tasks(_req, res) {
    Task.find({})
      .then(tasks => {
        console.log('Tasks from db: ', tasks);
        res.json({ message: 'Success', tasks: tasks });
      })
      .catch(error => res.status(Http.InternalServerError).json(error));
  },

  create(req, res) {
    console.log('REQ BODY: ', req.body.task);
    Task.create(req.body.task)
      .then(task => res.send(task))
      .catch(error => {
        // we are assuming validation errors
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },

  show(req, res) {
    const { id: task_id } = req.params;
    Task.findById({ _id: task_id })
      .then(task => res.json({ task: task }))
      .catch(error => res.status(Http.UnavailableForLegalReasons).json(error));
  },

  update: (req, res) => {
    const { id: taskId } = req.params;

    Task.findByIdAndUpdate(taskId, req.body, { new: true })
      .then(task => res.json(task))
      .catch(error => res.status(Http.UnavailableForLegalReasons).json(error));
  },

  delete: function(req, res) {
    const { id: task_id } = req.params;
    Task.findByIdAndDelete(task_id)
      .then(task => res.json(task))
      .catch(error => res.status(Http.ResetContent).json(error));
  },
};
