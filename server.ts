require("dotenv").config();
import Jimp from "jimp";

function main() {
  Jimp.read("./image.jpg")
    .then(async image => {
      // Do stuff with the image.
      console.log("image found");
      image.quality(10);
      image.write("./output.jpg", () => {
        console.log("output success");
      }); // Node-style callback will be fired when write is successful
      await image.writeAsync("./output.jpg");
      console.log("output success using writeAsync");
    })
    .catch(err => {
      // Handle an exception.

      console.error(err);
    });
}

main();
