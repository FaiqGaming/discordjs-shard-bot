const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./app.js', {
  token: process.env.BOT_TOKEN,
  autoSpawn: true
});

shard.spawn(2);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id}/${shard.totalShards}`));
