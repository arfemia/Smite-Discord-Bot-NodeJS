import { Client } from 'discord.js'
import { IntentOptions } from './config/IntentOptions';
import { onInteraction } from './events/onInteraction';
import { onReady } from './events/onReady';
import { validateEnv } from './utils/validateEnv';


try {


  // wrap in called async function to enable top level await
  (async () => {
    const Hirez = require('../src/hirez.js')
    const fs = require('fs')

    // Validate env variables - console warned within function
    if (!validateEnv()) return;
    console.log('ENV Variables loaded.')

    // connect to HiRez API
    console.log('Connecting to HiRez API...')
    const hiRezAPI = new Hirez({
      devId: 4270,
      authKey: "FBC3AAC847C44C4E94D6621293692EF4"
    });

    // const smiteAPIRef = hiRezAPI.smite('pc');
    // const smiteAPISession = await smiteAPIRef.init()
    // const y = await smiteAPISession.getItems()
    // console.log('in main: ', y)
    // await fs.writeFile('public/gods.json', JSON.stringify(y), (err: any) => { if (err) { console.warn(err); return; } })
    // // try {



    console.log('Starting Discord Bot Client')
    const BOT = new Client({ intents: IntentOptions })
    BOT.on("ready", () => onReady(BOT));

    // inject interaction handler
    BOT.on(
      "interactionCreate",
      async (interaction) => onInteraction(interaction)
    );




    await BOT.login(process.env.BOT_TOKEN);





  })();
} catch (e: any) {
  console.log(e)
}