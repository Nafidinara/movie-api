const seeder = require('mongoose-seed');
const config = require('../config/config');

seeder.connect(config.mongoose.url, () => {
  seeder.loadModels([
    './src/models/user.model.js'
  ]);
  seeder.clearModels(['User'], () => {
    seeder.populateModels(data, function (err, done) {
      if (err){
        return console.log(`Seed error`, err);
      }
      if (done){
        return console.log(`Seed successful`, done);
      }
      seeder.disconnect();
    });
  });
});

const data = [
  {
    'model' : 'User',
    'documents' : [
      {
        "role": "user",
        "isEmailVerified": false,
        "name": "test-user",
        "image": " ",
        "email": "testuser@example.com",
        "password" : "password123",
      },
      {
        "role": "user",
        "isEmailVerified": false,
        "name": "test-user-2",
        "image": " ",
        "email": "testuser2@example.com",
        "password" : "password123",
      },
      {
        "role": "user",
        "isEmailVerified": false,
        "name": "test-user-3",
        "image": " ",
        "email": "testuser3@example.com",
        "password" : "password123",
      },
      {
        "role": "admin",
        "isEmailVerified": false,
        "name": "test-admin",
        "image": " ",
        "email": "testadmin@example.com",
        "password" : "password123",
      },
      {
        "role": "superadmin",
        "isEmailVerified": false,
        "name": "test-superadmin",
        "image": " ",
        "email": "testsuperadmin@example.com",
        "password" : "password123",
      },
    ]
  }
]
