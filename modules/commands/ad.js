module.exports.config = {
    name: "ad",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Tรบ",
    description: "Thรดng tin vแป admin",
    commandCategory: "Ad",
    usages: "ad",
    cooldowns: 5,
    dependencies: {
      "request": ""
    }
};

module.exports.run = ({ api, event, args }) => {
    const request = require("request");
    if (!args[0] || typeof parseInt(args[0]) !== "number") return api.sendMessage(`โ ๐๐ร๐ ๐๐แปฎ๐๐ ๐๐ฦฏแป๐ ๐แปฌ ๐แปค๐๐ ๐๐๐ โ\nโ๏ธThรดng Tin Vแป Admin Bot 1 โ๏ธ\n๐๐๐ ๐๐ก ๐ก๐๐ ๐ :Nguyแปn Ngแปc Sฦกn \n๐ฉ๐๐ฬฃฬ๐ ๐๐๐๐ : Magic\n๐ฎ๐๐ฬฬ๐ ๐๐๐๐ฬฃฬ๐ : 1 nguoi binh thuong\nThรดng Tin Cรก Nhรขn\n๐ง๐ถฬ๐ป๐ต ๐ฐ๐ฎฬ๐ฐ๐ต : ๐ป๐๐๐ ๐๐๐ ๐ณ๐ ๐๐ ๐ธ\n๐๐ต๐ถ๐ฒฬฬ๐ ๐ฐ๐ฎ๐ผ : ๐ธ\n๐ณ๐๐ฬ๐ ๐ฏ๐ฬฃฬ :0856098006\nQuรช Quรกn : Hร  Nam\nNฦกi Sแปng : Hร  Nam\nMแปi quan hแป : cรณ cรกi nแปt  \n๐๐ข๐ง๐ค ๐๐๐๐๐๐จ๐จ๐ค ๐๐๐ฆ๐ข๐ง : https://www.facebook.com/...\nโ๏ธThรดng Tin Vแป Admin Bot 2 โ๏ธ\n๐๐๐ ๐๐ก ๐ก๐๐ ๐ :Lรช Nguyแปn Minh Phฦฐฦกng \n๐ฉ๐๐ฬฃฬ๐ ๐๐๐๐ : Mphuongw Nรจee\n๐ฎ๐๐ฬฬ๐ ๐๐๐๐ฬฃฬ๐ : youngboiz si tรฌnh\nThรดng Tin Cรก Nhรขn\n๐ง๐ถฬ๐ป๐ต ๐ฐ๐ฎฬ๐ฐ๐ต :Vui vแบป , hoร  ฤแปng , thรขn thiแปn , gแบงn gลฉi ๐ธ\n๐๐ต๐ถ๐ฒฬฬ๐ ๐ฐ๐ฎ๐ผ : 172 cm ๐ธ\n๐ณ๐๐ฬ๐ ๐ฏ๐ฬฃฬ :0985921850\nQuรช Quรกn : Bรฌnh Thuแบญn\nNฦกi Sแปng : Biรชn Hoร \nMแปi quan hแป : ฤแปc thรขn vui tรญnh  \n๐๐ข๐ง๐ค ๐๐๐๐๐๐จ๐จ๐ค ๐๐๐ฆ๐ข๐ง : https://www.facebook.com/LeNguyenMinhPhuong.Media\n๐ฝ๐ฬ๐ ๐๐ฬฬ๐ ๐๐ฬฬ๐ ๐๐ฬฃ๐ ๐๐ฬ๐๐ : Vui lรฒng khรดng spam khi sแปญ dแปฅng vร  trรขn thร nh cแบฃm ฦกn bแบกn ฤรฃ sแปญ dแปฅng bot\n๐๐ชฬ๐ช ๐ฎฬ : ฤแปซng cรณ dแบกi dแปt mร  add 2 bot kแบปo bแป phรกt hiแปn lร  sแบฝ bแป band box\n๐ช๐ฬ๐๐ ๐๐ฬ๐ : Vui lรฒng khรดng dรนng bot vแปi mแปฅc ฤรญch xแบฅu hay cแป รฝ report acc facebook\nChรบc bแบกn sแปญ dแปฅng vui vแบป <3`, event.threadID, event.messageID);
    return request(`https://nhentai.net/api/gallery/${parseInt(args[0])}`, (error, response, body) => {
        var codeData = JSON.parse(body);
        if (codeData.error === true) return api.sendMessage(getText('cantFindHentai'), threadID, messageID);
        const title = codeData.title.pretty;
        var tagList = [],
            artistList = [],
            characterList = [];
        codeData.tags.forEach(item => (item.type == "tag") ? tagList.push(item.name) : (item.type == "artist") ? artistList.push(item.name) : (item.type == "character") ? characterList.push(item.name) : '');
        var tags = tagList.join(', ');
        var artists = artistList.join(', ');
        var characters = characterList.join(', ');
        if (characters === '') characters = 'Original';
        api.sendMessage(`ยป Tรชn: ${title}\nยป Tรกc giแบฃ: ${artists}\nยป Nhรขn vแบญt: ${characters}\nยป Tags: ${tags}\nยป Liรชn kแบฟt: https://nhentai.net/g/${args[0]}`, event.threadID, event.messageID);
    });
}
