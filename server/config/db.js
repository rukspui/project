var dbName = 'fiiPractic';
var dbPort = '27017';
var dbHost = 'localhost';
var connectionString = 'mongodb://' + dbHost + ':' + dbPort + '/' + dbName;

module.exports = {
  url: connectionString
}
