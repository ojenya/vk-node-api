var request = require("request")

var url = "http://raspmath.isu.ru/getSchedule"
group = "02241-ДБ"
day = "Понедельник"
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
            if (body[i].group_name === group) {
                if (day === body[i].weekday) {
                    console.log(body[i].pair_start_time + "-" + body[i].pair_end_time + "\n" + body[i].subject_name + " " + "\n" + body[i].pair_type + "\n" + body[i].class_name + "\n" + body[i].week_type)
                }
            }
        }
    }
})