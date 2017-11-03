import Service from '@ember/service';

export default Service.extend({

    findAllForSubreddit(subreddit) {
        return $.getJSON(`https://www.reddit.com/r/${subreddit}.json`).then(function(response) {
          console.log(response.data.children);
          return response.data.children;
            // console.log(response);
            // return response
        });
    }
});
