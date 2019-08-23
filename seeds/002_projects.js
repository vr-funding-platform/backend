
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1, 
          projectName: 'VR World',
          projectType: 'VR',
          description: 'Create a world',
          fundingAmount: 1.00,
          fundingGoal: 100000.00,
          donors: '',
          funded: false,
          img: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Froadtovrlive-5ea0.kxcdn.com%2Fwp-content%2Fuploads%2F2018%2F08%2Fstarvr-one-8.jpg&f=1',
          user_id: 1,
        },
        
      ]);
    });
};
