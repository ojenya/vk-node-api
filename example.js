const VkBot = require('node-vk-bot-api')
const Session = require('node-vk-bot-api/lib/session')

const bot = new VkBot("12a362057da8855f031764e0f0de870c7a4fea657117897a8ecaae7c4fd7554f042f7288342816420ec93")
    // const bot = new VkBot(process.env.TOKEN)
const session = new Session()

bot.use(session.middleware())

bot.on((ctx) => {
    ctx.reply('No commands for you.')
})
bot.command("/start", (ctx) => {

    ctx.reply("ЗДАРОВА ЛОХ")

})


bot.startPolling()


// 12a362057da8855f031764e0f0de870c7a4fea657117897a8ecaae7c4fd7554f042f7288342816420ec93