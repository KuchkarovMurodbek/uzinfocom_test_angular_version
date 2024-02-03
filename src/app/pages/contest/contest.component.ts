import {
  Component,
  OnInit,
  SimpleChanges,
  OnChanges,
  inject,
} from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { TContest } from '../../types';
import { FetchService } from '../../service/fetch.service';
import { PageSizeComponent } from '../../components/page-size/page-size.component';
import { SearchInputComponent } from '../../components/inputs/search-input/search-input.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { SortService } from '../../service/sort.service';
import { BooleanSelectComponent } from '../../components/inputs/boolean-select/boolean-select.component';
import { DifficultySelectComponent } from '../../components/inputs/difficulty-select/difficulty-select.component';

@Component({
  selector: 'app-contest',
  standalone: true,
  imports: [
    TableComponent,
    PageSizeComponent,
    SearchInputComponent,
    PaginationComponent,
    BooleanSelectComponent,
    DifficultySelectComponent
  ],
  templateUrl: './contest.component.html',
  styleUrl: './contest.component.scss',
})
export class ContestComponent implements OnInit {
  private fetchService = inject(FetchService);
  private sortService = inject(SortService);
  data: TContest[] = [];
  pagesCount: number = 1;
  // paganition
  page_size: number = 20;
  page: number = 1;

  /// fitler
  search: string = '';
  difficulty:string=''
  boolean_value = {
    has_checker: '',
    has_check_input: '',
    has_solution: '',
    partial_solvable: '',
  };
  /// sort
  sort: { order: string; is_order: boolean } = { order: 'id', is_order: false };

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.fetchService
      .fetchData(
        this.page,
        this.page_size,
        this.search,
        this.sortService.sortMinusPlus(this.sort.is_order, this.sort.order),
        this.boolean_value.has_checker,
        this.boolean_value.has_check_input,
        this.boolean_value.has_solution,
        this.boolean_value.partial_solvable,
        this.difficulty

      )
      .subscribe({
        next: (data) => {
          this.data = data.data;
          this.pagesCount = data.pagesCount;
        },
      });
  }

  onSearch(value: string): void {
    this.search = value;
    this.fetchData();
  }

  onDifficulty(value:string):void{
     this.difficulty=value
     this.fetchData()
  }

  onChecker(has_checker: string):void {
    this.boolean_value.has_checker = has_checker;
    this.fetchData();
  }
  onCheckerInput(has_check_input: string):void {
    this.boolean_value.has_check_input = has_check_input;
    this.fetchData();
  }
  onSolution(has_solution: string):void {
    this.boolean_value.has_solution = has_solution;
    this.fetchData();
  }
  onPartialSolution(partial_solvable: string):void {
    this.boolean_value.partial_solvable = partial_solvable;
    this.fetchData();
  }
  onSort(sortOptions: { order: string; is_order: boolean }): void {
    const { is_order, order } = sortOptions;
    this.sort = { order, is_order };
    this.fetchData();
  }

  onPage(page: number): void {
    this.page = page;
    this.fetchData();
  }
  onPageSizeChange(page_size: number): void {
    this.page_size = page_size;
    this.fetchData();
  }
}
