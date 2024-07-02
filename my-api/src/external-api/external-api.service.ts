import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ExternalApiService {
    constructor(private readonly httpService: HttpService) {}

    fetchTendersData(country: string, title?: string, category?: string, date?: 'asc' | 'desc', value?: 'asc' | 'desc'): Observable<any> {
        const url = `https://tenders.guru/api/${country}/tenders`;
        let params = {};
        if (title) params['title'] = title;
        if (category) params['category'] = category;

        return this.httpService.get(url, { params }).pipe(
            map(response => {
                const data = response.data.data;
                return this.filterAndSortData(data, country, title, category, date, value);
            }),
        );
    }

    private filterAndSortData(data: any[], country: string, title?: string, category?: string, date?: 'asc' | 'desc', value?: 'asc' | 'desc'): any {
        if (!Array.isArray(data)) {
            console.log('Data is not an array:', data);
            return [];
        }

        if (title) {
            data = data.filter(item => item.title && item.title.toLowerCase().includes(title.toLowerCase()))
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

    private determineValue(item: any, country: string): number {
        if (country === 'pl' || country === 'hu') {
            return item.awarded_value_eur || 0;
        } else if (country === 'ro') {
            return item.awarded_value_eu || 0;
        } else {
            return item.awarded[0]?.value || 0;
        }
    }

    private mapTenderData(item: any, country: string): any {
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
}
