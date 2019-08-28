
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('serviceWorkers').del()
    .then(function () {
      // Inserts seed entries
      return knex('serviceWorkers').insert([
        {id: 1, 
        "username": "admin_worker",
        'password': "rwwew3f42g",
        'photoUrl':"https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2019/02/19/931/524/694940094001_6004012337001_6004024315001-vs.jpg?ve=1&tl=1",
        'fullName': "Admin Worker",
        'timeAtJob':"",
        'tagline':"Break a leg",
        'bio': "the admin service worker",
        'workplace':"theater",
        'accountBalance':20000,
        'rating': 1,
        'numOfRatings': 9,
        'serviceType':"admin"
      },
        {id: 2, 
       'username': "beta_worker",
        'password': "b3b3B#2fc",
        'photoUrl':"https://www.thewrap.com/wp-content/uploads/2016/07/tyrell-wellick-mr-robot.jpg",
        'fullName': "Tyrell Wellec",
        'timeAtJob':"",
        'tagline':"We are like Gods",
        'bio': "I am the CFO of evil corp",
        'workplace':"Evil Corp",
        'accountBalance':0,
        'rating': 5,
        'numOfRatings': 333,
        'serviceType':"CFO"
      },
        {id: 3, 
        'username': "Jim009",
        'password': "pam",
        'photoUrl':"https://miro.medium.com/max/2510/0*Xz-_cHSO6txphvHt.png",
        'fullName': "Jim John",
        'timeAtJob':"",
        'tagline':"Just your average jim",
        'bio': "Just her for the money",
        'workplace':"Some Place",
        'accountBalance':49.33,
        'rating': 3,
        'numOfRatings': 0,
        'serviceType':"worker"
      }
      ]);
    });
};
