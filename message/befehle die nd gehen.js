/* 
  *var battery; //Akkustand
  *var plugged; //check ob es lädt oder nicht
  *var client;
  *try {
  *    client = await bocchi.getMe()
  *    battery = client.battery + ''
  *    if (!client.plugged) { plugged = "*werde nicht geladen!*" } else { plugged = "*werde geladen!*" }
  *} catch (err) {
  *    battery = 0
  *    plugged = false
  *}
  *
  *case prefix + 'battery':
  *    await bocchi.sendText(from, `Mein Akkustand beträgt ${battery}% und ich ${plugged}`)
  *    break
  * 
  * 
 */