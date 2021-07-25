const { Post } = require('../models');

const postData = [
      {//1
        title: "Mayor of Portland is an energy hog!",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 2
    },
      {//2
        title: "Olivia of the hit Cruel Summer show gets Award!",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 3
    },
      {//3
        title: "Small town of Nixon Gets New City Hall!",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 1
    },
      {//4
        title: "Austin Over Run!",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 4
    },
      {//5
        title: "Come all Come and see us perform!",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 5
    },

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;