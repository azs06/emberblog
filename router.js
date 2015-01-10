Blogger.Router.map(function(){
this.resource('posts',{path: '/'});
this.resource('about');
this.resource('contact',function(){
this.resource('phone');
this.resource('email');
this.resource('form');  
});
this.resource('recent-comments');
this.resource('post',{path:'posts/:post_id'}); 
this.resource('new-post');      
});

Blogger.FormRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: 'form' });
  }
});