const VkBot = require('node-vk-bot-api')
const Session = require('node-vk-bot-api/lib/session')
const Markup = require('node-vk-bot-api/lib/markup');
const Stage = require('node-vk-bot-api/lib/stage');
const Scene = require('node-vk-bot-api/lib/scene');
const bot = new VkBot("12a362057da8855f031764e0f0de870c7a4fea657117897a8ecaae7c4fd7554f042f7288342816420ec93")

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://j3nqa:093zheka4067@cluster0-ksudn.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


var request = require("request")
var url = "http://raspmath.isu.ru/getSchedule"
const session = new Session();

const scene = new Scene('start',
    (ctx) => {
        ctx.scene.next();
        ctx.reply('Ты нас знаешь, а мы тебя еще нет😔', null, Markup
            .keyboard([

                [
                    Markup.button('Магистрант', 'secondary'),
                    Markup.button('Бакалавр', 'secondary'),
                ],
                [
                    Markup.button('Преподаватель', 'primary'),
                ],
            ]));
    },
    (ctx) => {

        ctx.session.status = ctx.message.body;
        console.log(ctx.session.status)
        ctx.scene.next();
        if (ctx.session.status === 'Магистрант' || ctx.session.status === 'Бакалавр') {
            ctx.scene.leave()
            ctx.scene.enter('checkStatus')

        } else if (ctx.session.status === 'Преподаватель') {
            ctx.reply("Ваша заявка принята!")
            ctx.scene.leave()

            ctx.scene.enter('start')
        } else {
            ctx.reply("Намите на кнопку если тупые0)0")
            ctx.scene.leave()

            ctx.scene.enter('start')
        }

    })



const checkStatus = new Scene('checkStatus',
    (ctx) => {
        ctx.scene.next();
        if (ctx.session.status === "Бакалавр") {
            ctx.reply('Выбери курс', null, Markup
                .keyboard([
                    [
                        Markup.button('Первый', 'secondary'),
                        Markup.button('Второй', 'secondary'),
                    ],
                    [
                        Markup.button('Третий', 'secondary'),
                        Markup.button('Четвертый', 'secondary'),
                    ],
                ]));
        } else if (ctx.session.status === "Магистрант") {
            ctx.reply('Выбери курс', null, Markup
                .keyboard([
                    [
                        Markup.button('Первый', 'secondary'),
                        Markup.button('Второй', 'secondary'),
                    ],
                ]));
        } else if (ctx.session.status === "Преподаватель") {
            ctx.reply('Ваша заявка будет рассмотрена!');

        }
    },
    (ctx) => {
        ctx.session.course = ctx.message.body;
        console.log(ctx.session.course)
        ctx.scene.leave()
        ctx.scene.enter('checkCourse')
    }

)





const checkCourse = new Scene('checkCourse',
    (ctx) => {
        ctx.scene.next();
        if (ctx.session.status === "Бакалавр" && ctx.session.course === "Первый") {

            client.connect(err => {
                const collection = client.db("schedule").collection("group");
                // perform actions on the collection object

                collection.find({ course: "1" }).toArray(function(err, results) {
                    send_course(results);
                });
                client.close();
            });

            function send_course(group) {
                arr = []
                array = [];
                group.forEach(element => {
                    array = [];
                    array.push(Markup.button(element.group_id, 'secondary'))
                    arr.push(array)
                });
                ctx.reply('Выбери группу', null, Markup
                    .keyboard(
                        arr
                    ));
            }

        }

        if (ctx.session.status === "Бакалавр" && ctx.session.course === "Второй") {

            client.connect(err => {
                const collection = client.db("schedule").collection("group");
                // perform actions on the collection object

                collection.find({ course: "2" }).toArray(function(err, results) {
                    send_course(results);
                });
                client.close();
            });

            function send_course(group) {
                arr = []
                array = [];
                group.forEach(element => {
                    array = [];
                    array.push(Markup.button(element.group_id, 'secondary'))
                    arr.push(array)
                });
                ctx.reply('Выбери группу', null, Markup
                    .keyboard(
                        arr
                    ));
            }

        }
        if (ctx.session.status === "Бакалавр" && ctx.session.course === "Третий") {

            client.connect(err => {
                const collection = client.db("schedule").collection("group");
                // perform actions on the collection object

                collection.find({ course: "3" }).toArray(function(err, results) {
                    send_course(results);
                });
                client.close();
            });

            function send_course(group) {
                arr = []
                array = [];
                group.forEach(element => {
                    array = [];
                    array.push(Markup.button(element.group_id, 'secondary'))
                    arr.push(array)
                });
                ctx.reply('Выбери группу', null, Markup
                    .keyboard(
                        arr
                    ));
            }

        }
        if (ctx.session.status === "Бакалавр" && ctx.session.course === "Четвертый") {

            client.connect(err => {
                const collection = client.db("schedule").collection("group");
                // perform actions on the collection object

                collection.find({ course: "4" }).toArray(function(err, results) {
                    send_course(results);
                });
                client.close();
            });

            function send_course(group) {
                arr = []
                array = [];
                group.forEach(element => {
                    array = [];
                    array.push(Markup.button(element.group_id, 'secondary'))
                    arr.push(array)
                });
                ctx.reply('Выбери группу', null, Markup
                    .keyboard(
                        arr
                    ));
            }

        }
        if (ctx.session.status === "Магистрант" && ctx.session.course === "Первый") {

            client.connect(err => {
                const collection = client.db("schedule").collection("group");
                // perform actions on the collection object

                collection.find({ course: "5" }).toArray(function(err, results) {
                    send_course(results);
                });
                client.close();
            });

            function send_course(group) {
                arr = []
                array = [];
                group.forEach(element => {
                    array = [];
                    array.push(Markup.button(element.group_id, 'secondary'))
                    arr.push(array)
                });
                ctx.reply('Выбери группу', null, Markup
                    .keyboard(
                        arr
                    ));
            }

        }
        if (ctx.session.status === "Магистрант" && ctx.session.course === "Второй") {

            client.connect(err => {
                const collection = client.db("schedule").collection("group");
                // perform actions on the collection object

                collection.find({ course: "6" }).toArray(function(err, results) {
                    send_course(results);
                });
                client.close();
            });

            function send_course(group) {
                arr = []
                array = [];
                group.forEach(element => {
                    array = [];
                    array.push(Markup.button(element.group_id, 'secondary'))
                    arr.push(array)
                });
                ctx.reply('Выбери группу', null, Markup
                    .keyboard(
                        arr
                    ));
            }

        }
    },
    (ctx) => {
        ctx.session.group = ctx.message.body;
        console.log(ctx.session.group)
        ctx.scene.leave()
        ctx.scene.enter('checkGroup')
    })

const checkGroup = new Scene('checkGroup',
    (ctx) => {
        ctx.session.group = ctx.message.body;
        ctx.scene.next();
        ctx.reply('Выбери день', null, Markup
            .keyboard([
                [
                    Markup.button('Понедельник', 'secondary'),
                    Markup.button('Вторник', 'secondary'),

                ],
                [
                    Markup.button('Среда', 'secondary'),
                    Markup.button('Четверг', 'secondary'),

                ],
                [
                    Markup.button('Пятница', 'secondary'),
                    Markup.button('Суббота', 'secondary'),

                ],
                [

                    Markup.button('Сменить группу', 'secondary'),

                ]

            ]));

    },
    (ctx) => {
        ctx.session.day = ctx.message.body;
        if (ctx.message.body === "Сменить группу") {
            ctx.scene.leave()
            ctx.scene.enter('start')
        } else {
            request({
                url: url,
                json: true
            }, async function(error, response, body) {
                body.sort(function(obj1, obj2) {
                    // Сортировка по возрастанию
                    return obj1.pair_start_time - obj2.pair_start_time;
                });
                console.log(response.statusCode)
                if (!error && response.statusCode === 200) {
                    // Print the json response
                    for (let i = 0; i < body.length; i++) {
                        if (body[i].group_name === ctx.session.group) {
                            if (ctx.session.day === body[i].weekday) {

                                await ctx.reply(body[i].pair_start_time + "-" + body[i].pair_end_time + "\n" + body[i].subject_name + " " + "\n" + body[i].pair_type + "\n" + body[i].class_name + "\n" + body[i].week_type)
                            }
                        }
                    }
                }
            })
            ctx.scene.next()
        }
    },
    (ctx) => {

        if (ctx.message.body === "Сменить группу") {



            ctx.scene.leave()
            ctx.scene.enter('start')
        } else {
            ctx.scene.enter('checkGroup', 1)
        }


    }
)

const stage = new Stage(scene, checkStatus, checkCourse, checkGroup);

bot.use(session.middleware());
bot.use(stage.middleware());

bot.command('/r', (ctx) => {
    ctx.scene.enter('start');
});

bot.command('/set', (ctx) => {
    ctx.scene.enter('start');
});

bot.startPolling();


// 12a362057da8855f031764e0f0de870c7a4fea657117897a8ecaae7c4fd7554f042f7288342816420ec93