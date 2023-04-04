const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fib')
		.setDescription('Input a number to retrieve that number of the Fibonacci sequence.')
		.addIntegerOption(option => 
		option.setName('n')
			  .setDescription('Fibonacci number to calculate')
			  .setRequired(true)),
			
	async execute(interaction) {
		const input = interaction.options.getInteger('n');
		return interaction.reply(`Fibonacci number ${input} is ${fibonacci(input)}`);
	}
};

function fibonacci(n)
{
    let arr = []
    arr[0] = 0n;
    arr[1] = 1n;
    for (let i = 2; i <= n; i++)
    {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n]
}
