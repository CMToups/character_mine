Template.ufields.all = function () {
  return Ufields.find({template: this._id});
}

Template.edit_ufields.all = function () {
  return Ufields.find({template: this._id});
}
