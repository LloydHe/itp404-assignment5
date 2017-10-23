import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    
    return $.getJSON(`https://www.reddit.com/r/${params.subreddit}.json`);
  }
});
