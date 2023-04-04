const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('John Cena'),
	async execute(interaction) {
		await interaction.reply('https://cdn.discordapp.com/attachments/537338075194327062/1092930553264738424/hq720_2.png');
	},
};
