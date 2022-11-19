import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from "../../../shared/services/users.service";
import {User} from "../../../shared/models/user";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<User>;
  @ViewChild( MatPaginator, { static : true })
  paginator!: MatPaginator;
  displayedColumns: string[] = ['firstname', 'points'];
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private usersService: UsersService) {
    this.dataSource = new MatTableDataSource<User>();
  }

  ngOnInit(): void {
    this.getRanking();
  }

  getRanking() {
    this.usersService.getTop100DescByPoints().subscribe(response => this.dataSource.data = response);
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
