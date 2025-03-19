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
exports.FirebaseMessagingService = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
let FirebaseMessagingService = class FirebaseMessagingService {
    constructor(app) {
        this.app = app;
        if (!this.app) {
            throw new Error('Firebase instance is undefined.');
        }
        this.messaging = this.app.messaging();
    }
    sendEach(messages, dryRun) {
        return this.messaging.sendEach(messages, dryRun);
    }
    sendEachForMulticast(message, dryRun) {
        return this.messaging.sendEachForMulticast(message, dryRun);
    }
    send(message, dryRun) {
        return this.messaging.send(message, dryRun);
    }
    subscribeToTopic(registrationTokens, topic) {
        return this.messaging.subscribeToTopic(registrationTokens, topic);
    }
    unsubscribeFromTopic(registrationTokens, topic) {
        return this.messaging.unsubscribeFromTopic(registrationTokens, topic);
    }
};
exports.FirebaseMessagingService = FirebaseMessagingService;
exports.FirebaseMessagingService = FirebaseMessagingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], FirebaseMessagingService);
