var mongoose = require("mongoose");
var Campground = require("./models/campground.js");
var Comment = require("./models/comment");
var data = [
  {
    name:"New Camp 1",
    image: "http://www.topeducationdegrees.org/wp-content/uploads/2014/05/49.-River-Way-Ranch-Camp-%E2%80%93-Sanger-California.jpg",
    description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  },
  {
    name:"New Camp 2",
    image: "https://media.timeout.com/images/102744091/630/472/image.jpg",
    description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  },
  {
     name:"New Camp 3",
    image: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2012/08/03/48491210-most-expensive-summer-camps-cover1.600x400.jpg",
    description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  }
];

function seedDB(){
    //Remove all Campgrounds
    Campground.remove({}, function(err){
    //   if(err){
    //     console.log(err);
    //   }
    //   console.log("Campgrounds Removed!");
    //   //Add few Campgrounds
    //   data.forEach(function(seed){
    //     Campground.create(seed, function(err, campground){
    //       if(err){
    //         console.log(err);
    //       } else{
    //           console.log("Campground added!");
    //           Comment.create(
    //             {
    //               text: "Comment1 ajksdh jash ddfsd",
    //               author: "Homer"
    //             }, function(err, comment){
    //               if(err){
    //                 console.log(err);
    //               } else{
    //                 campground.comments.push(comment);
    //                 campground.save();
    //                 console.log("comment saved!");
    //               }
    //             })
    //           }
    //     });
    // });
  });
  //Add few Comments
}
module.exports = seedDB;
