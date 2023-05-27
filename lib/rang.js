/* eslint-disable no-redeclare */
async function getRang(rang, si, db) {
    if (rang == 'Hoster') {
        var isHoster = await db.teamContains('team', { 'id': si, 'typ': 'Hoster' });
        return isHoster
    } else if (rang == 'Support') {
        var isSupport = await db.teamContains('team', { 'id': si, 'typ': 'Support' });
        return isSupport
    } else if (rang == 'Mod') {
        var isMod = await db.teamContains('team', { 'id': si, 'typ': 'Mod' });
        return isMod
    } else if (rang == 'Manager') {
        var isManager = await db.teamContains('team', { 'id': si, 'typ': 'Manager' });
        return isManager
    } else if (rang == 'StvInhaber') {
        var isStvInhaber = await db.teamContains('team', { 'id': si, 'typ': 'StvInhaber' });
        return isStvInhaber
    } else if (rang == 'Developer') {
        var isDeveloper = await db.teamContains('team', { 'id': si, 'typ': 'Developer' });
        return isDeveloper
    } else if (rang == 'Inhaber') {
        var isInhaber = await db.teamContains('team', { 'id': si, 'typ': 'Inhaber' });
        return isInhaber
    } else if (rang == 'TopSpender') {
        var isTopSpender = await db.teamContains('team', { 'id': si, 'typ': 'TopSpender' });
        return isTopSpender
    } else if (rang == 'isTeam') {
        var isInhaber = await db.teamContains('team', { 'id': si, 'typ': 'Inhaber' });
        var isDeveloper = await db.teamContains('team', { 'id': si, 'typ': 'Developer' });
        var isStvInhaber = await db.teamContains('team', { 'id': si, 'typ': 'StvInhaber' });
        var isManager = await db.teamContains('team', { 'id': si, 'typ': 'Manager' });
        var isMod = await db.teamContains('team', { 'id': si, 'typ': 'Mod' });
        var isSupport = await db.teamContains('team', { 'id': si, 'typ': 'Support' });
        var isTopSpender = await db.teamContains('team', { 'id': si, 'typ': 'TopSpender' });
        var isTeam = isTopSpender || isSupport || isMod || isManager || isStvInhaber || isDeveloper || isInhaber 
        return isTeam
    } else if (rang == 'isModerator') {
        var isInhaber = await db.teamContains('team', { 'id': si, 'typ': 'Inhaber' });
        var isDeveloper = await db.teamContains('team', { 'id': si, 'typ': 'Developer' });
        var isStvInhaber = await db.teamContains('team', { 'id': si, 'typ': 'StvInhaber' });
        var isManager = await db.teamContains('team', { 'id': si, 'typ': 'Manager' });
        var isMod = await db.teamContains('team', { 'id': si, 'typ': 'Mod' });
        var isTopSpender = await db.teamContains('team', { 'id': si, 'typ': 'TopSpender' });
        var isModerator = isTopSpender || isMod || isManager || isStvInhaber || isDeveloper || isInhaber
        return isModerator
    } else if (rang == 'isLeitung') {
        var isInhaber = await db.teamContains('team', { 'id': si, 'typ': 'Inhaber' });
        var isDeveloper = await db.teamContains('team', { 'id': si, 'typ': 'Developer' });
        var isStvInhaber = await db.teamContains('team', { 'id': si, 'typ': 'StvInhaber' });
        var isManager = await db.teamContains('team', { 'id': si, 'typ': 'Manager' });
        var isLeitung = isManager || isStvInhaber || isDeveloper || isInhaber
        return isLeitung
    } else if (rang == 'isOwner') {
        var isInhaber = await db.teamContains('team', { 'id': si, 'typ': 'Inhaber' });
        var isDeveloper = await db.teamContains('team', { 'id': si, 'typ': 'Developer' });
        var isStvInhaber = await db.teamContains('team', { 'id': si, 'typ': 'StvInhaber' });
        var isOwner = isStvInhaber || isDeveloper || isInhaber
        return isOwner
    }

} 

module.exports = {
    getRang
}
