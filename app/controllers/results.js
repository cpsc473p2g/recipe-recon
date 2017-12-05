import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['q'],
  actions:{
    add: function(r_name, r_sitename, r_yield, r_source,r_image,r_ingredient,r_attr,r_uid){
      var comment = 'Add a note';

      alert('Added to favorites');
      //create new favorite
      var newFavorite = this.store.createRecord('favorite',{
        title: r_name,
        sitename: r_sitename,
        source: r_source,
        image: r_image,
        uid: r_uid,
        comment: comment
      });

      //save favorite to database
      newFavorite.save();


    }
  }
});

/*
recipe.name recipe.yield recipe.sourceUrl recipe.imageUrl recipe.ingredientLines recipe.attributionHtml
name: DS.attr(),
yield: DS.attr(),
ingredientLines: DS.attr(),
imageUrl: DS.attr(),
sourceUrl: DS.attr(),
sourceSiteName: DS.attr(),
sourceSiteUrl: DS.attr(),
attributionHtml: DS.attr(),
*/
