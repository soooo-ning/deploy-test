'use strict';

const Sequelize = require('sequelize');
let config = require(__dirname + '/../config/config.js');
console.log('config', config);
config = config['development'];
console.log('config', config);
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

// 설정 정보를 sequelize 라는 key 안에 넣어주는 중
db.sequelize = sequelize;
// {
//   sequelize:sequelize
// }

// 시퀄라이즈 모듈을 Sequelize 라는 key 안에 넣어주는 중
db.Sequelize = Sequelize;
// {
//   sequelize:sequelize,
//   Sequelize:Sequelize,
// }

db.Visitor = require('./Visitor')(sequelize, Sequelize);
// {
//   sequelize:sequelize,
//   Sequelize:Sequelize,
//   Visitor:Visitor의 모델
// }

module.exports = db; // app.js
