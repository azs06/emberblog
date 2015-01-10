Blogger.AboutController = Ember.Controller.extend({
	isPictureShowing: false,
	actions:{
		showMessage : function(){
			alert('Shakespearean actor Sir Henry Irving was a possible real-life inspiration for the character of Dracula');
		},
		showPicture : function(){
			this.set('isPictureShowing',true);
		},
		hidePicture: function(){
			this.set('isPictureShowing',false);
		}
	}
});