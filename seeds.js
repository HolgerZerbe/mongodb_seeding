const mongoose = require('mongoose');
const Post  = require('./Post');

require('dotenv').config();

mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

(async () => {

        if (!(process.argv.includes("--delete"))) {

                const foundPost = await Post.find();
                console.log(foundPost);
                if (foundPost.length === 0) {

                    let datas = [{
                            titel: "Blog Überschrift Nr. 1",
                            content: "Dies ist der erste Blog"
                        },
                        {
                            titel: "Blog Überschrift Nr. 2",
                            content: "Dies ist der zweite Blog"
                        }
                    ];

                    const createdPosts = await Post.insertMany(datas);
                }
            } else {
                const deletedPosts = await Post.deleteMany();
            }
            process.exit();
        })();