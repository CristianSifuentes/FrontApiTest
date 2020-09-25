import { Router } from 'express';
const promisify = require('util').promisify;
const request = promisify(require('request'));
const fetch = require('node-fetch');

const router = Router();
var post;


// router.get('/', (req, res) => {

//       // Call the API
//       fetch('http://jsonplaceholder.typicode.com/posts').then(function (response) {
//         if (response.ok) {
//           return response.json();
//         } else {
//           return Promise.reject(response);
//         }
//       }).then(function (data) {

//         // Store the post data to a variable
//         post = data;
//         var lookup = {};
//         var items = post;
//         var result = [];

//       for (var item, i = 0; item = items[i++];) {
//         var name = item.userId;

//         if (!(name in lookup)) {
//           lookup[name] = 1;
//           result.push(name);
//         }
//       }

//         // Fetch another API
//           return fetch('https://jsonplaceholder.typicode.com/users/' + 1);
//         // return Promise.reject(result);

//       }).then(function (response) {
//         if (response.ok) {
//           return response.json();
//         } else {
//           return Promise.reject(response);
//         }
//       }).then(function (userData) {
//         console.log(post, userData);
//       }).catch(function (error) {
//         console.warn(error);
//       });
// });




//   router.get('/', (req, res) => {
//      return res.send(Object.values(req.context.models.users));
//   });


//  router.get('/:userId', (req, res) => {
//     return res.send(req.context.models.users[req.params.userId]);
//  });


  router.get('/', (req, res) => {
   try {
      request.get({
          url: 'http://jsonplaceholder.typicode.com/users',
          headers: {              
            "content-type": "application/json"
           }
      }, ( error, response, body) => {
          const data = JSON.parse(body)
          res.send(data)
     })
      
    } catch (error) {
        res.send(error)
    }
  });

export default router;

