"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseDatabaseService = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
let FirebaseDatabaseService = class FirebaseDatabaseService {
    constructor(app) {
        this.app = app;
        if (!app) {
            throw new Error('Firebase instance is undefined.');
        }
        this.database = app.database;
    }
    goOffline(url) {
        this.database(url).goOffline();
    }
    goOnline(url) {
        this.database(url).goOnline();
    }
    ref(path, url) {
        return this.database(url).ref(path);
    }
    refFromURL(refUrl, url) {
        return this.database(url).refFromURL(url);
    }
    getRules(url) {
        return this.database(url).getRules();
    }
    getRulesJSON(url) {
        return this.database(url).getRulesJSON();
    }
    setRules(source, url) {
        return this.database(url).setRules(source);
    }
    useEmulator(host, port, url) {
        this.database(url).useEmulator(host, port);
    }
};
exports.FirebaseDatabaseService = FirebaseDatabaseService;
exports.FirebaseDatabaseService = FirebaseDatabaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], FirebaseDatabaseService);
