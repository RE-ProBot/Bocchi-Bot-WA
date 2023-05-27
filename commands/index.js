const glob = require("glob");
const importFresh = require('import-fresh');

let allOfThem = {};

// Get all Commands
glob.sync(`${__dirname}/Bot/*.js`).forEach((file) => {
    allOfThem = { ...allOfThem, ...importFresh(file) };
});

glob.sync(`${__dirname}/Downloader/*.js`).forEach((file) => {
    allOfThem = { ...allOfThem, ...importFresh(file) };
});

glob.sync(`${__dirname}/Fun/*.js`).forEach((file) => {
    allOfThem = { ...allOfThem, ...importFresh(file) };
});

glob.sync(`${__dirname}/Gaming/*.js`).forEach((file) => {
    allOfThem = { ...allOfThem, ...importFresh(file) };
});

glob.sync(`${__dirname}/Leveling/*.js`).forEach((file) => {
    allOfThem = { ...allOfThem, ...importFresh(file) };
});

glob.sync(`${__dirname}/Misc/*.js`).forEach((file) => {
    allOfThem = { ...allOfThem, ...importFresh(file) };
});

glob.sync(`${__dirname}/Moderation/*.js`).forEach((file) => {
    allOfThem = { ...allOfThem, ...importFresh(file) };
});

glob.sync(`${__dirname}/NSFW/*.js`).forEach((file) => {
    allOfThem = { ...allOfThem, ...importFresh(file) };
});

glob.sync(`${__dirname}/Owner/*.js`).forEach((file) => {
    allOfThem = { ...allOfThem, ...importFresh(file) };
});

glob.sync(`${__dirname}/Ohne/*.js`).forEach((file) => {
    allOfThem = { ...allOfThem, ...importFresh(file) };
});

glob.sync(`${__dirname}/Premium/*.js`).forEach((file) => {
    allOfThem = { ...allOfThem, ...importFresh(file) };
});

glob.sync(`${__dirname}/Sticker/*.js`).forEach((file) => {
    allOfThem = { ...allOfThem, ...importFresh(file) };
});

glob.sync(`${__dirname}/Weeaboo/*.js`).forEach((file) => {
    allOfThem = { ...allOfThem, ...importFresh(file) };
});

module.exports = allOfThem;
