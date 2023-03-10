
var spawnHarvester = {
    run : function(spawn) {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
            console.log('Harvesters: ' + harvesters.length);

            if(harvesters.length < 2) {
                var newName = 'Harvester' + Game.time;
                console.log('Spawning new harvester: ' + newName);
                Game.spawns[spawn].spawnCreep([WORK,CARRY,MOVE], newName, 
                    {memory: {role: 'harvester'}});        
            }
            
            if(Game.spawns[spawn].spawning) { 
                var spawningCreep = Game.creeps[Game.spawns[spawn].spawning.name];
                Game.spawns[spawn].room.visual.text(
                    '🛠️' + spawningCreep.memory.role,
                    Game.spawns[spawn].pos.x + 1, 
                    Game.spawns[spawn].pos.y, 
                    {align: 'left', opacity: 0.8});
            }
    }
}

module.exports = spawnHarvester;