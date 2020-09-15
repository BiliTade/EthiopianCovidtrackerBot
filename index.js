 const{Telegraf}= require('telegraf');
 axios=require('axios')
 dateFormat=require('dateformat')

 let bot= new Telegraf('1167555627:AAH3F_7CWBTbfShFTGwqrlPNyGYMp5zp7sg');





bot.start((ctx)=>{
    let engWelcome=
    `Hey,<b> ${ctx.from.first_name} </b> , Welcome  To CovidGuy Bot!
     
     \

    `;
    bot.telegram.sendMessage(ctx.chat.id, engWelcome, {
        
        reply_markup:{

          inline_keyboard:[

              [{ text:' Ethiopia 🇪🇹', callback_data:'ethiopia' }],
              [{ text:'World 🌎', callback_data:'world' }],
              [{ text:'vaccine Phases 💉', callback_data:'phase' }],
              [{ text:'vaccine info 🔬', callback_data:'info' }],
              [{ text:'About 👨‍💻', callback_data:'about' }],
              
          ]

        },
   
        parse_mode:'HTML'})
    

})
// call backs for  start 
bot.action('ethiopia', (ctx)=>{
    ctx.answerCbQuery('clicked')
    ctx.deleteMessage();

bot.telegram.sendMessage(ctx.chat.id, `Get Covid-19 status in Ethiopia\n`,{

    reply_markup:{

        inline_keyboard:[

            [{ text:' Current status', callback_data:'ecurrent' }],
            [{ text:' Yesterday status', callback_data:'eyesterday' }],
            [{ text:' 2 Days Ago', callback_data:'etwodays' }],
            [{ text:'Back To Home', callback_data:'back' }],
           
            
        ]

      },




} )

//  callback action to back to main menu,
bot.action ('back', async(ctx)=>{
    let engWelcome=
    `Hey,<b> ${ctx.from.first_name} </b> , Welcome  To CovidGuy Bot!
     
     \


    `;

ctx.answerCbQuery('clicked')
ctx.deleteMessage();
bot.telegram.sendChatAction(ctx.chat.id, 'typing');
bot.telegram.sendMessage(ctx.chat.id, engWelcome, {
        
    reply_markup:{

      inline_keyboard:[

          [{ text:' Ethiopia 🇪🇹', callback_data:'ethiopia' }],
          [{ text:'World 🌎', callback_data:'world' }],
          [{ text:'vaccine Phases 💉', callback_data:'phase' }],
          [{ text:'vaccine info 🔬', callback_data:'info' }],
          [{ text:'About 👨‍💻', callback_data:'about' }],
          
      ]

    },

    parse_mode:'HTML'})





})
// used to clear message above the clear  keyboard
bot.action('clear',ctx=>{
  ctx.deleteMessage();
  ctx.answerCbQuery('deleted')




})

//current status of ethiopian covid 19 case 
bot.action ('ecurrent',async(ctx)=>{

    const sendGetRequest = async () => {
        try {
            const res = await axios.get('https://disease.sh/v3/covid-19/countries/Ethiopia');
         
       let C=res.data.cases    
       let tdc=res.data.todayCases;
       let tdd=res.data.todayDeaths;
       let D=res.data.deaths;
       let Re=res.data.recovered;
       let tRec=res.data.todayRecovered;
       let active=res.active;
       let cr=res.data.critical;
       let  T=res.data.tests;
       let  P=res.data.population;


       let last =dateFormat(new Date(res.data.updated), "dddd, mmmm dS, yyyy, h:MM:ss TT")

       let Message=`
     
       🔄: ${last}
       \`
       
       +-----------------------------+
       | Today  \Case       | ${tdc}                 
       +-----------------------------+
       | Today Death       | ${tdd}                 
       +-----------------------------+
       | Total Death       | ${D}                 
       +-----------------------------+
       | Total Cases       | ${C}                 
       +-----------------------------+    
       | critical Patient  | ${cr}                 
       +-----------------------------+    
       | Today Recovered   | ${tRec}                 
       +-----------------------------+    
       | Total Recovered   | ${Re}                 
       +-----------------------------+
       | Total Lab Exam    | ${T}                 
       +-----------------------------+
       | Population        | ${P}                 
       +-----------------------------+
       \`
    
      
      `;
      ctx.answerCbQuery('clicked')
      bot.telegram.sendChatAction(ctx.chat.id, 'typing');
      bot.telegram.sendMessage(ctx.from.id , Message, {
          
        reply_markup:{

            inline_keyboard:[

                [{ text:'Back To Home', callback_data:'back' }],
                [{ text:'Clear Table', callback_data:'clear' }],
            ]
    
          },
    
        
        parse_mode:'Markdown'} )

        } catch (err) {
            // Handle Error Here
            console.error(" some error ocured "+err);
        }
    };
    
    sendGetRequest();

    
    })

} )

// callback action  for yesterday cases in Ethiopia
bot.action ('eyesterday',async(ctx)=>{

    const sendGetRequest = async () => {
        try {
            const res = await axios.get('https://disease.sh/v3/covid-19/countries/Ethiopia?yesterday=true&strict=true&allowNull=true');
         
       let C=res.data.cases    
       let tdc=res.data.todayCases;
       let tdd=res.data.todayDeaths;
       let D=res.data.deaths;
       let Re=res.data.recovered;
       let tRec=res.data.todayRecovered;
       let active=res.active;
       let cr=res.data.critical;
       let  T=res.data.tests;
       let  P=res.data.population;


       let last =dateFormat(new Date(res.data.updated), "dddd, mmmm dS, yyyy, h:MM:ss TT")

       let Message=`
        \n
       *   Yesterday Covid-19 \Case in Ethiopia*
       
       \`
       

       +-----------------------------+
       | Today  \Case       | ${tdc}                 
       +-----------------------------+
       | Today Death       | ${tdd}                 
       +-----------------------------+
       | Total Death       | ${D}                 
       +-----------------------------+
       | Total Cases       | ${C}                 
       +-----------------------------+    
       | critical Patient  | ${cr}                 
       +-----------------------------+    
       | Today Recovered   | ${tRec}                 
       +-----------------------------+    
       | Total Recovered   | ${Re}                 
       +-----------------------------+
       | Total Lab Exam    | ${T}                 
       +-----------------------------+
       | Population        | ${P}                 
       +-----------------------------+
       \`
    
      
      `;
      ctx.answerCbQuery('clicked')
      bot.telegram.sendChatAction(ctx.chat.id, 'typing');
      bot.telegram.sendMessage(ctx.from.id , Message, {
          
        reply_markup:{

            inline_keyboard:[

                [{ text:'Clear Table', callback_data:'erase' }],
                [{ text:'Back To Home', callback_data:'back' }],
            ]
    
          },
    
        
        parse_mode:'Markdown'} )

        } catch (err) {
            // Handle Error Here
            console.error(" some error ocured "+err);
        }
    };
    
    sendGetRequest();

    
    })































// for world callback

bot.action('world', (ctx)=>{
    ctx.answerCbQuery('clicked')
    ctx.deleteMessage();
    let=''

bot.telegram.sendMessage(ctx.chat.id, `current covid status  WorldWide\n`,{

    reply_markup:{

        inline_keyboard:[

            [{ text:' Current status', callback_data:'ethiopia' }],
            [{ text:' Yesterday status', callback_data:'neighbour' }],
            [{ text:' 2 Days Ago', callback_data:'world' }],
            [{ text:'Back To Home', callback_data:'world' }],
           
            
        ]

      },




} )






} )




bot.launch();