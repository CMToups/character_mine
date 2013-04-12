
Template.new_field.events({
  'click .add' : function () {
    Session.set('new_field', true);
  },
  'click .cancel' : function () {
    Session.set('new_field', false);
  },
  'click .save' : function () {
    save_new_field(this);
  },
  'keypress input': function (evt) {     
    if (evt.which === 13) {
      save_new_field(this);
    }
  }
});

Template.edit_ufield.events({
  'click .delete' : function () {
    Ufields.remove(this._id);
  }
});

Template.list_ufts.ufts = function () {
  return UformTemplates.find({});
}

Template.new_field.new_field = function () {
  return Session.get('new_field');
};


var save_new_field = function (template) {
  var form = submit_helper('#new_field');
  //do validation on form
  form['template'] = template._id;
  console.log(form)
  Ufields.insert(form, function(err) {
      if(!err) {
          $('#new_field')[0].reset();
      }
      else
      {
          alert("Something is wrong");
          console.log(err);
      }
  });
};

function submit_helper(this_form) {
    form={};

    $.each($(this_form).serializeArray(), function() {
        form[this.name] = this.value;
    });

    return form
};
