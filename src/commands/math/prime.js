const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('isprime')
		.setDescription('Input a number to check if that number is prime.')
		.addIntegerOption(option => 
		option.setName('n')
			  .setDescription('Number to check for primality')
			  .setRequired(true)),
			
	async execute(interaction) {
		const input = interaction.options.getInteger('n');
		if (isPrime(input))
			return interaction.reply(`${input} is prime! The next prime number is ${nextPrime(input)}`);
		else
			return interaction.reply(`${input} is not prime!`)
	}
};

function isPrime(num)
{
  if (num == 2 || num == 3)
    return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0)
    return false;  
  for (let i = 5; i * i <= num ; i+=6)
    if (num % i == 0 || num % (i + 2) == 0)
      return false;
  return true;
}

function nextPrime(n)
{
    n++;
  while (!isPrime(n))
    n++;
  return n;
}
