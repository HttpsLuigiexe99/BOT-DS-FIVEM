//REQUISITI (7)
// NON MODIFICARE IL COICE POTREBBE NON FUNZIONARE CORRETTAMENTE E NON PROVARE A TOGLIERE =BY HttpsLuigiexe99#6956
// SCARICARE NEL TERMINALE FACENDO [npm i discord.js]
// SCARICARE NEL TERMINALE FACENDO [npm i discord.js@13]
// SCARICARE NEL TERMINALE FACENDO [npm init]
// SCARICARE IL PACKAGING: package.json - package-lock.json - node_modules
// METTERE NEGLI APPOSITI SPAZI L'ID DEI CANALI 
// METTERE IL VOSTRO TOKEN
// NON RIVENDERE QUESTO BOT [COGLIONE;)] BOT BY HttpsLuigiexe99#6956 ;)
//----------------------TIGER DEVELOPMENT ™ -----------------------------------//
//PRIMA DI AVVIARE IL BOT LEGGERE I REQUISITI !!!
//BY https://discord.gg/2dSjZv3J8n
//FINE XD


const { Client, Collection, MessageEmbed, MessageAttachment } = require('discord.js');
require('events').EventEmitter.prototype._maxListeners = 100;
const Discord = require('discord.js'); // scaricare nel terminale, facendo *  npm i discord.js@13  * 
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_VOICE_STATES", ],
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
});


client.login("METTERE IL TOKEN"), //inserire il token

    client.on("ready", () => {
        console.log("TIGER BOT ON")
    })

//////////////////////////////////////////TIGER DEVELOPMENT™//////////////////////////////////////////////////////////////////


//STATUS
client.on('ready', () => {
    setInterval(() => {
        client.user.setActivity(`${client.guilds.cache.size} SERVER💻 `, { type: 'WATCHING' })
    }, 20000); //  60 secondI.
});



//////////////////////////////////////////TIGER DEVELOPMENT™//////////////////////////////////////////////////////////////////

// SISTEMA DI VERIFICA

client.on('messageCreate', async message => {
    if (message.content == '!verifica') {
        var button = new Discord.MessageButton()
            .setLabel('[VERIFICATI]')
            .setEmoji('') //id emoji
            .setStyle('SECONDARY')
            .setCustomId('HttpsLuigiexe99#6956')
        var embed = new Discord.MessageEmbed()
            .setColor('#f77c00')
            .setTitle("🤖 TIGER SYSTEM VERIFICA 🤖")
            .setDescription("**Benvenuto su TIGER DEVELOPMENT™ \rPremi il pulsante per verificarti**")
            .setThumbnail("") ////////link thumbnail
            .setFooter("[POWERED BY HttpsLuigiexe99#6956]")
        var row = new Discord.MessageActionRow()
            .addComponents(button)
        message.channel.send({ embeds: [embed], components: [row] })
    }
})

client.on('interactionCreate', async interaction => {
    if (interaction.customId == 'HttpsLuigiexe99#6956') {
        interaction.member.roles.add('943549139311026316') //qua metti id del ruolo da mettere all'utente

        interaction.reply({ content: `${interaction.member.toString()}**, Hai ottenuto il ruolo con successo!!!**`, ephemeral: true })
    }
})


//////////////////////////////////////////TIGER DEVELOPMENT™//////////////////////////////////////////////////////////////////


//REGOLANENTO
client.on("message", (message) => {
    if (message.content == "!regolamento") {
        message.channel.send("1)  Non siate sessisti, razzisti, volgari" + message.author.toString())
        message.channel.send("2)  Meglio non parlare di politica o religione")
        message.channel.send("3)  Sì alle discussioni animate, ma non litigate")
        message.channel.send("4)  Non parlate di attività illegali e non invitate all'investimento")
        message.channel.send("5)  Usate sempre il canale giusto per l'argomento di cui volete discutere")
        message.channel.send("6)  Rispettate i moderatori e gli amministratori")
        message.channel.send("7)  Non inserite links nei canali dedicati alle discussioni e non iniziate discussioni nei canali dedicati ai links")
        message.channel.send("8)  Evitate di spezzettare un messaggio")
        message.channel.send("9)  Usate le reazioni Schermata 2017-12-01 alle 09.30.59.png invece di rispondere a un messaggio con un altro contenente un solo smiley")
        message.channel.send("10) Non scrivete in maiuscolo, solo gli amministratori o i moderatori se necessario possono farlo")
        message.channel.send("11) Non iniziate una nuova discussione se non si è conclusa la precedente")
        message.channel.send("12) Nelle chat vocali non sovrapponete la vostra voce a quella degli altri, attendete che un utente concluda l'espressione di un concetto prima di intervenire")
        message.channel.send("13) Siate gentili e cordiali con i nuovi entrati")
        message.channel.send("14) Rispondete alle richieste di aiuto in chat")
        message.channel.send("15) NO SPAM   **LEGGETE IL REGOLAMENTO GRAZIE**")


    }
})


//////////////////////////////////////////TIGER DEVELOPMENT™//////////////////////////////////////////////////////////////////


// SISTEMA AVATAR FUNCTION
client.on("messageCreate", message => {
    if (message.content.startsWith("!avatar")) {
        if (message.content.trim() == "!avatar") {
            var utente = message.member;
        } else {
            var utente = message.mentions.members.first();
        }
        if (!utente) {
            return message.channel.send("Utente non trovato")
        }
        var embed = new Discord.MessageEmbed()
            .setTitle(utente.user.tag)
            .setDescription("L'avatar di questo utente:")
            .setImage(utente.user.displayAvatarURL({
                dynamic: true,
                format: "png",
                size: 512
            }))
        message.channel.send({ embeds: [embed] })
    }
})


//////////////////////////////////////////TIGER DEVELOPMENT™//////////////////////////////////////////////////////////////////


// SISTEMA STAFF "BAN"
client.on("messageCreate", message => {
        if (message.content.startsWith("!ban")) {
            let utente = message.mentions.members.first();
            if (!message.member.permissions.has('BAN_MEMBERS')) {
                return message.channel.send('Non hai il permesso');
            }
            if (!utente) {
                return message.channel.send('Non hai menzionato nessun utente');
            }
            if (!utente.bannable) {
                return message.channel.send('Io non ho il permesso');
            }
            utente.ban()
                .then(() => {
                    let embed = new Discord.MessageEmbed()
                        .setTitle(`${utente.user.username} bannato`)
                        .setDescription(`Utente bannato da ${message.author.toString()}`)

                    message.channel.send({ embeds: [embed] })
                })
        }
    })
    // UNBAN 
client.on("messageCreate", async message => {
    if (message.content.startsWith("!unban")) {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }

        let args = message.content.split(/\s+/);
        let idUtente = args[1]

        if (!idUtente) {
            return message.channel.send("Non hai scritto l'id di nessun utente");
        }

        message.guild.members.unban(idUtente)
            .then(() => {
                let embed = new Discord.MessageEmbed()
                    .setTitle("Utente sbannato")
                    .setDescription("Questo utente è stato sbannato")

                message.channel.send({ embeds: [embed] })
            })
            .catch(() => { message.channel.send("Utente non valido o non bannato") })
    }
})

// KICK
client.on("messageCreate", message => {
    if (message.content.startsWith("!kick")) {
        let utente = message.mentions.members.first();
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        if (!utente.kickable) {
            return message.channel.send('Io non ho il permesso');
        }
        utente.kick()
            .then(() => {
                let embed = new Discord.MessageEmbed()
                    .setTitle(`${utente.user.username} kickato`)
                    .setDescription(`Utente kickato da ${message.author.toString()}`)

                message.channel.send({ embeds: [embed] })
            })
    }
})

//////////////////////////////////////////TIGER DEVELOPMENT™//////////////////////////////////////////////////////////////////
//STAFF 1 
client.on("message", message => {
    if (message.content == "!permessi") {
        if (message.member.roles.cache.has("960159333717516358")) {
            message.channel.send(`**SALVE AMMINISTRATORE BEN TORNATO;)**`);
        } else {
            message.channel.send(`**NON HAI I PERMESSI NECESSARI MEME**`);
        }
    }
})



//////////////////////////////////////////TIGER DEVELOPMENT™//////////////////////////////////////////////////////////////////



//STAFF 2
client.on("message", message => {
    if (message.content.startsWith("!pulisci")) {
        //!pulisci 100



        var count = message.content.slice(8);
        count = parseInt(count);

        if (!count) {
            message.channel.send("**AMMINISTRATORE DEVI METTERE UN NUMERO DI MESSAGGI CHE VUOI ELIMINARE**")
            return
        }


        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send('Non ho il permesso');
            return;
        }


        message.channel.bulkDelete(count, true)
        message.channel.send(count + "**messaggi eliminati**").then(msg => {
            msg.delete({ timeout: 1 })
        })

    }
})

//////////////////////////////////////////TIGER DEVELOPMENT™//////////////////////////////////////////////////////////////////


//SITEMA USERINFO
client.on("messageCreate", message => {
    if (message.content.startsWith("!userinfo")) {
        if (message.content == ".userinfo") {
            var utente = message.member;
        } else {
            var utente = message.mentions.members.first();
        }
        if (!utente) {
            return message.channel.send("Non ho trovato questo utente")
        }
        var elencoPermessi = "997633974451048480";
        if (utente.permissions.has("ADMINISTRATOR")) {
            elencoPermessi = "👑 ADMINISTRATOR";
        } else {
            var permessi = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "ADMINISTRATOR", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "VIEW_GUILD_INSIGHTS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MANAGE_EMOJIS_AND_STICKERS", "USE_APPLICATION_COMMANDS", "REQUEST_TO_SPEAK", "MANAGE_THREADS", "CREATE_PUBLIC_THREADS", "CREATE_PRIVATE_THREADS", "USE_EXTERNAL_STICKERS", "SEND_MESSAGES_IN_THREADS", "START_EMBEDDED_ACTIVITIES"]
            for (var i = 0; i < permessi.length; i++)
                if (utente.permissions.has(permessi[i]))
                    elencoPermessi += `- ${permessi[i]}\r`
        }
        var embed = new Discord.MessageEmbed()
            .setTitle(utente.user.tag)
            .setFooter({ text: "[POWERED BY HttpsLuigiexe99#6956]" })
            .setDescription("Tutte le info di questo utente")
            .setThumbnail(utente.user.displayAvatarURL())
            .addField("User id", utente.user.id, true)
            .addField("Status", utente.presence ? utente.presence.status : "offline", true)
            .addField("Is a bot?", utente.user.bot ? "Yes" : "No", true)
            .addField("Account created", utente.user.createdAt.toDateString(), true)
            .addField("Joined this server", utente.joinedAt.toDateString(), true)
            .addField("Permissions", elencoPermessi, false)
            .addField("Roles", utente.roles.cache.map(ruolo => ruolo.name).join("\r"), false)
        message.channel.send({ embeds: [embed] })
    }
})


//////////////////////////////////////////TIGER DEVELOPMENT™//////////////////////////////////////////////////////////////////


//SITEMA INFOSERVER
client.on("messageCreate", message => {
    if (message.content == "!serverinfo") {
        var server = message.guild;
        var embed = new Discord.MessageEmbed()
            .setTitle(server.name)
            .setFooter({ text: "[POWERED BY HttpsLuigiexe99#6956]" })
            .setDescription("Tutte le info su questo server")
            .setThumbnail(server.iconURL())
            .addField("Owner", client.users.cache.get(server.ownerId).username, true)
            .addField("Server id", server.id, true)
            .addField("Members", server.memberCount.toString(), false)
            .addField("Channels", server.channels.cache.size.toString(), false)
            .addField("Server created", server.createdAt.toDateString(), true)
            .addField("Boost level", "Level " + (server.premiumTier != "NONE" ? server.premiumTier : 0) + " (Boost: " + server.premiumSubscriptionCount + ")", true)
        message.channel.send({ embeds: [embed] })
    }
})


//////////////////////////////////////////TIGER DEVELOPMENT™//////////////////////////////////////////////////////////////////


// SISTEMA ENTRATA
client.on("guildMemberAdd", member => {
    const dateText = `<t:${Math.round(new Date().getTime() / 1000)}>`
    if (member.user.bot) return
    var embed = new MessageEmbed()
        .setColor('#f77c00')
        .setAuthor(`${member.user.tag}`, member.displayAvatarURL({ dynamic: true }))
        .setDescription(`${member.toString()} è entrato nel server`)
        .addField("Utente", `<@${member.user.id}> - (\`${member.id} - ${member.user.tag}\`)`, false)
        .addField("Data", `${dateText}`, true)

    client.channels.cache.get("1033300299210817586").send({ embeds: [embed] }); // channel id
})

// SISTEMA USCITA
client.on("guildMemberRemove", member => {
    const dateText = `<t:${Math.round(new Date().getTime() / 1000)}>`
    if (member.user.bot) return


    var embed = new MessageEmbed()
        .setColor('#f77c00')
        .setAuthor(`${member.user.tag}`, member.displayAvatarURL({ dynamic: true }))
        .setDescription(`${member.toString()} è uscito dal server`)
        .addField("Utente", `<@${member.id}> - (\`${member.id} - ${member.user.tag}\`)`, false)
        .addField("Data", `${dateText}`, true)

    client.channels.cache.get("972636867663102033").send({ embeds: [embed] }); // channel id
})

//////////////////////////////////////////TIGER DEVELOPMENT™//////////////////////////////////////////////////////////////////


//SISTEMA BLASCKIST
client.on("messageCreate", async message => {
    const black = message.guild.channels.cache.find(channel => channel.name === `🤖`) // name of the logs channel
    var one = new MessageEmbed()
        .setColor('#f77c00')
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`${message.author.toString()} ha usato una parola nella lista blacklisted!\n **Message**: \`${message.content}\``)
    var two = new MessageEmbed()
        .setColor('#f77c00')
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`${message.author.toString()},non usare parole nella lista blacklisted o verrai bannato!\n **Message**: \`${message.content}\``)
    let blacklisted = ['negro', 'discord.gg', 'hitler', 'mussolini', 'nps', 'down', 'ebreo', 'ebrei', 'discord copiato', 'negri', 'ebrei', 'ebreo', 'hanticappato', 'server di merda', 'morite', 'froci', 'merda']; //blacklisted words
    let foundInText = false;
    for (var i in blacklisted) {
        if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    if (foundInText) {
        message.delete();
        message.author.send({ embeds: [two] })
        black.send({ embeds: [one] })

    }
})

//////////////////////////////////////////TIGER DEVELOPMENT™//////////////////////////////////////////////////////////////////


//SITEMA TICKET
//Prima di tutto mandare il messaggio del ticket
client.on("message", message => {
    if (message.content == "!ticket privato") {
        message.channel.send("Clicca sulla reazione per aprire un ticket")
            .then(msg => msg.react("📩")) //Personalizzare l'emoji della reaction
    }
})


client.on("messageReactionAdd", async function(messageReaction, user) {
    if (user.bot) return

    if (messageReaction.message.partial) await messageReaction.message.fetch();

    if (messageReaction._emoji.name == "📩") { //Personalizzare l'emoji della reaction
        if (messageReaction.message.channel.id == "970640854278606878") { //Settare canale
            messageReaction.users.remove(user);
            var server = messageReaction.message.channel.guild;
            if (server.channels.cache.find(canale => canale.topic == `User ID: ${user.id}`)) {
                user.send("Hai gia un ticket aperto").catch(() => {})
                return
            }

            server.channels.create(user.username, {
                type: "text"
            }).then(canale => {
                canale.setTopic(`User ID: ${user.id}`);
                canale.setParent("968867526740156446") //Settare la categoria
                canale.overwritePermissions([{
                        id: server.id,
                        deny: ["VIEW_CHANNEL"]
                    },
                    {
                        id: user.id,
                        allow: ["VIEW_CHANNEL"]
                    }
                ])
                canale.send("Grazie per aver aperto un ticket")
            })
        }
    }
})

client.on("message", message => {
    if (message.content == "!close") {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }

        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.hasPermission("MANAGE_CHANNELS")) {
                message.channel.delete();
            }
        } else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }

    if (message.content.startsWith("!add")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }

        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.hasPermission("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }

                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)

                if (haIlPermesso) {
                    message.channel.send("Questo utente ha gia accesso al ticket")
                    return
                }

                message.channel.updateOverwrite(utente, {
                    VIEW_CHANNEL: true
                })

                message.channel.send(`${utente.toString()} è stato aggiunto al ticket`)
            }
        } else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("!remove")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }

        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.hasPermission("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }

                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)

                if (!haIlPermesso) {
                    message.channel.send("Questo utente non ha gia accesso al ticket")
                    return
                }

                if (utente.hasPermission("MANAGE_CHANNELS")) {
                    message.channel.send("Non puoi rimuovere questo utente")
                    return
                }

                message.channel.updateOverwrite(utente, {
                    VIEW_CHANNEL: false
                })

                message.channel.send(`${utente.toString()} è stato rimosso al ticket`)
            }
        } else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
})