const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('parallel')
		.setDescription('Calculate equivalent resistance for two resistors in parallel')
		.addIntegerOption(option => 
		option.setName('r1')
			  .setDescription('First resistor')
			  .setRequired(true))
		.addIntegerOption(option => 
		option.setName('r2')
			  .setDescription('Second resistor')
			  .setRequired(true)),
			
	async execute(interaction) {
		const rOne = interaction.options.getInteger('r1');
		const rTwo = interaction.options.getInteger('r2');
		if (rOne < 0 || rTwo < 0) 
			return interaction.reply(`Nobel prize winning physics!`);
		return interaction.reply(`The equivalent resistance is ${parallel(rOne, rTwo)} Ω`);
	}
};

function parallel(rOne, rTwo)
{
	return (rOne*rTwo)/(rOne+rTwo);
}
