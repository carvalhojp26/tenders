"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    admin.initializeApp({
        credential: admin.credential.cert(require('../config/firebase-key.json'))
    });
    console.log('Firebase Admin initialized successfully');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map