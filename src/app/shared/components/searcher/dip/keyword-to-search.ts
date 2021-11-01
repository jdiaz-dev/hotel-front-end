import { Observable } from 'rxjs';

export interface IKeywordToSearchDip {
    keywordToSearch$: Observable<string>;
    keywordToSearch(keyword: string): void;
}
