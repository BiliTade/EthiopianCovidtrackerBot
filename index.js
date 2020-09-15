 const{Telegraf}= require('telegraf');
 axios=require('axios')
 dateFormat=require('dateformat')

 let bot= new Telegraf('1167555627:AAH3F_7CWBTbfShFTGwqrlPNyGYMp5zp7sg');





bot.start((ctx)=>{
    let engWelcome=
    `Hey 😁😍,<b> ${ctx.from.first_name} </b>! Welcome  \To CovidGuy Bot!
     \Using this bot you can get Covid-19 status in Ethiopia & also 
     \In The World. \To \start just click \one of the Following Button
     
     \

    `;
    bot.telegram.sendMessage(ctx.chat.id, engWelcome, {
        
        reply_markup:{

          inline_keyboard:[

              [{ text:' Ethiopia 🇪🇹', callback_data:'ethiopia' }],
              [{ text:'World 🌎', callback_data:'world' }],
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
            [{ text:'Back To Home🔙', callback_data:'back' }],
           
            
        ]

      },




} )


// used to clear message above the clear  keyboard


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
      bot.telegram.sendMessage(ctx.chat.id , Message, {
          
        reply_markup:{

            inline_keyboard:[

                [{ text:'Back To Home🔙', callback_data:'back' }],
                [{ text:'Clear Table❌', callback_data:'erase' }],
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
     
       Yesterday covid-19 status In Ethiopia
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
      bot.telegram.sendMessage(ctx.chat.id , Message, {
          
        reply_markup:{

            inline_keyboard:[

                [{ text:'Clear Table❌', callback_data:'erase' }],
                [{ text:'Back To Home🔙', callback_data:'back' }],
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
    //  get ethiopian status  of 2days ago 
    bot.action ('etwodays',async(ctx)=>{

        const sendGetRequest = async () => {
            try {
                const res = await axios.get('https://disease.sh/v3/covid-19/countries/Ethiopia?twoDaysAgo=true&strict=true&allowNull=true');
             
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
     
       2Days ago -Covid status in Ethiopia
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
          bot.telegram.sendMessage(ctx.chat.id , Message, {
              
            reply_markup:{
    
                inline_keyboard:[
    
                    [{ text:'Clear Table❌', callback_data:'erase' }],
                    [{ text:'Back To Home🔙', callback_data:'back' }],
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

           [{ text:'New Case Rank', callback_data:'caseRank' }],
           [{ text:' New Death Rank', callback_data:'deathRank' }],
           [{ text:' Total Death Rank', callback_data:'totaldeathRank' }],
           [{ text:' Total Case Rank', callback_data:'totalRank' }],
           [{ text:' Total World', callback_data:'totalworld' }],
           [{ text:'Back To Home🔙', callback_data:'back' }],
           
            
        ]

      },




} )






} )


bot.action ('totalRank',(ctx)=>{

    const sendGetRequest = async () => {
        try {
            const res = await axios.get('https://disease.sh/v3/covid-19/countries?sort=cases');
  

       
       
       let Message=` Rank of countries based TotalCase \n `;

       
        for (var i=0; i<=60;i++)
        {

          var obj=res.data[i];

        Message+=`\`\n +-----------------------------+\n`
                 +(i+1)+' '+ obj.country +   '-----'+ obj.cases+` \`\n`

        }




       
      ctx.answerCbQuery('clicked')
      bot.telegram.sendChatAction(ctx.chat.id, 'typing');
      bot.telegram.sendMessage(ctx.chat.id , Message, {
          
        reply_markup:{

            inline_keyboard:[

                [{ text:'Clear Table❌', callback_data:'erase' }],
                [{ text:'Back To Home🔙', callback_data:'back' }],
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



// new case  rank arround the world
    bot.action ('caseRank',(ctx)=>{

        const sendGetRequest = async () => {
            try {
                const res = await axios.get('https://disease.sh/v3/covid-19/countries?sort=todayCases&allowNull=0');
      
    
           
           
           let Message=` Rank of countries based on TodayCase`;
    
           
            for (var i=0; i<=60;i++)
            {
    
              var obj=res.data[i];
    
            Message+=`\`\n +-----------------------------+\n`
                     +(i+1)+' '+ obj.country +   '-----'+ obj.todayCases+` \`\n`
    
            }
    
    
    
    
           
          ctx.answerCbQuery('clicked')
          bot.telegram.sendChatAction(ctx.chat.id, 'typing');
          bot.telegram.sendMessage(ctx.chat.id , Message, {
              
            reply_markup:{
    
                inline_keyboard:[
    
                    [{ text:'Clear Table❌', callback_data:'erase' }],
                    [{ text:'Back To Home🔙', callback_data:'back' }],
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
        // new death rank   
        bot.action ('deathRank',(ctx)=>{

            const sendGetRequest = async () => {
                try {
                    const res = await axios.get('https://disease.sh/v3/covid-19/countries?sort=todayDeaths&allowNull=0');
          
        
               
               
               let Message=` Rank of countries based Today Death`;
        
               
                for (var i=0; i<=60;i++)
                {
        
                  var obj=res.data[i];
        
                Message+=`\`\n +-----------------------------+\n`
                         +(i+1)+' '+ obj.country +   '-----'+ obj.todayDeaths+` \`\n`
        
                }
        
        
        
        
               
              ctx.answerCbQuery('clicked')
              bot.telegram.sendChatAction(ctx.chat.id, 'typing');
              bot.telegram.sendMessage(ctx.chat.id , Message, {
                  
                reply_markup:{
        
                    inline_keyboard:[
        
                        [{ text:'Clear Table❌', callback_data:'erase' }],
                        [{ text:'Back To Home 🔙', callback_data:'back' }],
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


   // total death rank
   bot.action ('totaldeathRank',(ctx)=>{

    const sendGetRequest = async () => {
        try {
            const res = await axios.get('https://disease.sh/v3/covid-19/countries?sort=deaths&allowNull=1');
  

       
       
       let Message=``;

       
        for (var i=0; i<=60;i++)
        {

          var obj=res.data[i];

        Message+=`\`\n +-----------------------------+\n`
                 +(i+1)+' '+ obj.country +   '-----'+ obj.deaths+` \`\n`

        }




       
      ctx.answerCbQuery('clicked')
      bot.telegram.sendChatAction(ctx.chat.id, 'typing');
      bot.telegram.sendMessage(ctx.chat.id , Message, {
          
        reply_markup:{

            inline_keyboard:[

                [{ text:'Clear Table❌', callback_data:'erase' }],
                [{ text:'Back To Home🔙', callback_data:'back' }],
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



    bot.action ('totalworld',async(ctx)=>{

        const sendGetRequest = async () => {
            try {
                const res = await axios.get('https://disease.sh/v3/covid-19/all');
             
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
     
           \`
           +-------------------------+
           | Today  \Case| ${tdc}                 
           +--------------------------+
           | Today Death | ${tdd}                 
           +--------------------------+
           | Total Death | ${D}                 
           +--------------------------+
           | Total Cases | ${C}                 
           +--------------------------+    
           | critical Patient| ${cr}                 
           +--------------------------+    
           | Today Recovered | ${tRec}                 
           +--------------------------+    
           | Total Recovered | ${Re}                 
           +--------------------------+
           | Total Lab Exam | ${T}                 
           +--------------------------+
           | Population   | ${P}                 
           +--------------------------+
           \`
        
          
          `;
    
      

          ctx.answerCbQuery('clicked')
          bot.telegram.sendChatAction(ctx.chat.id, 'typing');
          bot.telegram.sendMessage(ctx.chat.id , Message, {
            
            reply_markup:{
    
                inline_keyboard:[
    
                    [{ text:'Clear Table❌', callback_data:'erase' }],
                    [{ text:'Back To Home🔙', callback_data:'back' }],
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
     
        bot.action ('about', async(ctx)=>{
            let engWelcome=
            ` Yo🤘 Thanks for Using the Bot.If you have
             \any Comments \Use the Following Button.
             Also , dont forget \-to subscribe \-to my
             youtube \and Telegram channel.
            `;
        
        ctx.answerCbQuery('clicked')
        ctx.deleteMessage();
        bot.telegram.sendChatAction(ctx.chat.id, 'typing');
        bot.telegram.sendMessage(ctx.chat.id, engWelcome, {
                
            reply_markup:{
        
              inline_keyboard:[
        
                  [{ text:'YouTube ▶️', url:'https://www.youtube.com/ilovetech1' }],
                  [{ text:'Telegram Channel 📱 ',url:'t.me/ilovetech1' }],
                  [{ text:'My Account 🧔🏾', url:'t.me/BiliTade'}],
                  [{ text:'Back To Home 🔙', callback_data:'back' }],
                  
              ]
        
            },
        
            parse_mode:'HTML'})
        
        })
        




    
//   used to delete output printed as table

    bot.action('erase',ctx=>{
        ctx.deleteMessage();
        ctx.answerCbQuery('deleted')
      
      })



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
          [{ text:'About 👨‍💻', callback_data:'about' }],
          
      ]

    },

    parse_mode:'HTML'})

})




bot.launch();
