module.exports = {
  name: 'essay',
  description: 'Generate essay',
  category: 'ai',
  usage: 'essay <topic>',
  async execute(client, message, args) {
    if (args.length === 0) {
      return await message.reply('❌ Please provide a topic!');
    }
    
    const topic = args.join(' ');
    
    try {
      await message.reply('⏳ Generating essay...');
      
      // Replace with actual Essay Generation API
      const essay = 'Essay: [API Integration Required]';
      
      await message.reply(`📝 Essay on ${topic}:\n${essay}`);
    } catch (err) {
      await message.reply(`❌ Error: ${err.message}`);
    }
  }
};
