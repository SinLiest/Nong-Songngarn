const { MessageEmbed } = require('discord.js');
const jobModel = require("../models/schema");

module.exports = {
    name: "add",
    description: "add job",
    async execute(msg, args, client) {
        const embed = new MessageEmbed().setColor("#add79b");
        if(msg.member.roles.cache.has("909049029734834226")) {
            let name = args.join(" ");  // job name
            let job = await jobModel.find({serverId: msg.guild.id});
            let jobName = [];
            const author = msg.author.tag;

            for(let i=0 ; i<job.length ; i++){
                jobName.push(job[i].jobName);
            }
            if(jobName.includes(name)){
                embed.setDescription("This name has already used");
                msg.reply({ embeds: [embed] });
                return ;
            }

            if(typeof name !== "string" || name.length < 0){
                embed.setDescription("Invalid Job Name");
                msg.reply({ embeds: [embed] });
                return ;
            }

            embed.setDescription(`Please type date in this format: <dd/mm/yyyy> <hour>\n**<hour> is optional\n\nYou can type "cancel" to exit this command.`);
            msg.reply({ embeds: [embed] });
            client.commands.get("add_chain_2").execute(name, author, client);      
        } 
        else {
            embed.setDescription("You can't send this command because you don't have the right permissions");
            msg.reply({ embeds: [embed] });
        }
    }
};
