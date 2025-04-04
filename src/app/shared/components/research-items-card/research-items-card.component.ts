import {AfterViewInit, Component, HostListener, OnInit, signal} from '@angular/core';
import {ResearchModel} from '../../models/research.model';
import {RESEARCH} from '../../data/research-items';
import {CommonModule, DatePipe} from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-research-items-card',
  standalone: true,
  imports: [
    DatePipe,
    CommonModule
  ],
  templateUrl: './research-items-card.component.html',
  styleUrl: './research-items-card.component.css'
})
export class ResearchItemsCardComponent implements OnInit, AfterViewInit {
  research_items = signal<ResearchModel[]>(RESEARCH)


  displayCount = 3

  ngOnInit(): void {
    this.updateDisplayCount()
  }

  ngAfterViewInit() {
    AOS.init()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateDisplayCount()
  }

  updateDisplayCount() {
    this.displayCount = window.innerWidth <= 1160 ? 4 : 3
  }


}
