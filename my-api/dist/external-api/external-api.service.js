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
exports.ExternalApiService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const operators_1 = require("rxjs/operators");
let ExternalApiService = class ExternalApiService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    fetchTendersData(country, title, category, date, value) {
        const url = `https://tenders.guru/api/${country}/tenders`;
        let params = {};
        if (title)
            params['title'] = title;
        if (category)
            params['category'] = category;
        return this.httpService.get(url, { params }).pipe((0, operators_1.map)(response => {
            const data = response.data.data;
            return this.filterAndSortData(data, country, title, category, date, value);
        }));
    }
    filterAndSortData(data, country, title, category, date, value) {
        if (!Array.isArray(data)) {
            console.log('Data is not an array:', data);
            return [];
        }
        if (title) {
            data = data.filter(item => item.title && item.title.toLowerCase().includes(title.toLowerCase()));
        }
        if (category) {
            data = data.filter(item => item.category && item.category.toLowerCase() === category.toLowerCase());
        }
        if (date) {
            data.sort((a, b) => {
                const dateA = new Date(a.date).getTime();
                const dateB = new Date(b.date).getTime();
                return date === 'asc' ? dateA - dateB : dateB - dateA;
            });
        }
        if (value) {
            data = data.sort((a, b) => {
                let valueA = this.determineValue(a, country);
                let valueB = this.determineValue(b, country);
                return value === 'asc' ? valueA - valueB : valueB - valueA;
            });
        }
        return data.map(item => this.mapTenderData(item, country));
    }
    determineValue(item, country) {
        if (country === 'pl' || country === 'hu') {
            return item.awarded_value_eur || 0;
        }
        else if (country === 'ro') {
            return item.awarded_value_eu || 0;
        }
        else {
            return item.awarded[0]?.value || 0;
        }
    }
    mapTenderData(item, country) {
        const value = this.determineValue(item, country);
        return {
            date: item.date,
            deadline: item.deadline_date,
            deadlineLength: item.deadline_length_days,
            title: item.title,
            category: item.category,
            srcURL: item.src_url,
            supplier: item.suppliers ? item.suppliers[0]?.name : 'Unknown',
            value: value
        };
    }
};
exports.ExternalApiService = ExternalApiService;
exports.ExternalApiService = ExternalApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], ExternalApiService);
//# sourceMappingURL=external-api.service.js.map