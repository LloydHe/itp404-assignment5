import Controller from '@ember/controller';

export default Controller.extend({

  email:{
    read:false,
    title: "404"
  },

  actions: {
    search(e) {
      e.preventDefault();
      let subreddit = this.get('subreddit');
      this.transitionToRoute('subreddits', subreddit);
    }
  },

  markAsRead(){
    this.set('email.read', true);
  }


});
