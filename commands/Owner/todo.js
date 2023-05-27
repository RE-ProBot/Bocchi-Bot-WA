async function todo(a, b ,eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)
    var isOwner = await getRang('isOwner', a.sender.id, a.db)
    
    if (!isLeitung) return await b.reply(a.from, eng.leitungOnly(), a.id)
    const todos = await a.db.count('todo')
    var todo = await a.db.getFromAllWithOrder('todo', 'time')
    var todos1 = `── *「  TODO-LIST  」* ──\nAnzahl Todos: ${todos}\n\n`;
    todo.forEach(e => todos1 += `Todo-ID: ${e.id}\nErsteller: wa.me/${e.senderid.replace('@c.us', '')}\nTeam: ${e.team}\nTodo: ${e.text}\n\n`);
    if (a.ar[0] == 'add') {
        if (!isLeitung) return await b.reply(a.from, eng.leitungOnly(), a.id)
        await a.db.add('todo', { 'senderid': a.sender.id, 'text': a.q.replace('add ', '') })
        await b.reply(a.from, `Todo erfolgreich in Liste geschrieben für:\nId: ${a.sender.id}`, a.id)
    } else if (a.ar[0] == 'remove') {
        if (!isLeitung) return await b.reply(a.from, eng.leitungOnly(), a.id)
        await a.db.removeId('todo', a.args[1])
        await b.reply(a.from, `Todo erfolgreich aus Liste gelöscht.\nId :${a.args[1]}`, a.id)
    } else if (a.ar[0] == 'team') {
        if (!isLeitung) return await b.reply(a.from, eng.leitungOnly(), a.id)
        var todocount = await a.db.countWhere('todo', { 'team': 'true' })
        var todoteam = await a.db.getFromAllWithWhere('todo', { 'team': 'true' })
        var todosteam = `── *「  TODO-LIST  」* ──\nAnzahl Todos: ${todocount}\n\n`;
        todoteam.forEach(e => todosteam += `Todo-ID: ${e.id}\nErsteller: wa.me/${e.senderid.replace('@c.us', '')}\nTodo: ${e.text}\n\n`);
        await b.reply(a.from, todosteam, a.id)
    } else if (a.ar[0] == 'noteam') {
        if (!isLeitung) return await b.reply(a.from, eng.leitungOnly(), a.id)
        var todocount = await a.db.countWhere('todo', { 'team': 'false' })
        var todonoteam = await a.db.getFromAllWithWhere('todo', { 'team': 'false' })
        var todosnoteam = `── *「  TODO-LIST  」* ──\nAnzahl Todos: ${todocount}\n\n`;
        todonoteam.forEach(e => todosnoteam += `Todo-ID: ${e.id}\nErsteller: wa.me/${e.senderid.replace('@c.us', '')}\nTodo: ${e.text}\n\n`);
        await b.reply(a.from, todosnoteam, a.id)
    } else if (a.ar[0] == 'delete') {
        if (!isOwner) return await b.reply(a.from, eng.ownerOnly(), a.id)
        try {
            await a.db.cleartableNoCatch('todo')
            await b.reply(a.from, `Alle Todos erfolgreich aus der Liste gelöscht.`, a.id)
        } catch (e) {
            await b.reply(a.from, `Todos NICHT gelöscht.`, a.id)
        }
    } else {
        await b.reply(a.from, `Der Befehl "Todo" funktioniert wie folgt:\n\n - /todo add\nFügt neue Todos für das Team hinzu!\n\n - /todo remove Id\nLöscht deine Todo anhand der Id\n\n - /todo team\nZeigt alle Team-Todos an\n\n - /todo noteam\nZeigt die User-Todos an\n\n - /todo delete\nLöscht alle Todos`, a.id)
    }

}
async function usertodo(a, b ,eng) {
    try{
        await a.db.addNoCatch('todo', { 'senderid': a.sender.id, 'text': a.q, 'team': 'false' })
        await b.reply(a.from, `UserTodo erfolgreich in Liste geschrieben.`, a.id)
    } catch (e) {
        await b.reply(a.from, `*── 「 UserTodo 」 ──*\nDiese Todo existiert bereits!❌`, a.id)
    }
}

module.exports = {
    todo,
    usertodo
}
