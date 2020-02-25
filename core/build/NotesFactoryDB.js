"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mong = require("mongoose");
var NotesFactoryDB = /** @class */ (function () {
    //err: boolean;
    function NotesFactoryDB(dbConnection) {
        this.dbConnection = dbConnection;
    }
    NotesFactoryDB.prototype.connect = function (dbName) {
        mong.connect(this.dbConnection + dbName, { useNewUrlParser: true });
        return mong.connection;
    };
    NotesFactoryDB.prototype.create = function (o) {
    };
    return NotesFactoryDB;
}());
