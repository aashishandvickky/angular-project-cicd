import { Component, OnInit } from '@angular/core';
import { WaveAccessibilityService } from '../wave-accessibility.service';

@Component({
  selector: 'app-accessibility-check',
  templateUrl: './accessibility-check.component.html',
  styleUrls: ['./accessibility-check.component.css']
})
export class AccessibilityCheckComponent implements OnInit {
  accessibilityResults: any;
  url: string = 'https://www.msn.com/en-in/health/health-news/why-is-it-important-to-have-soaked-almonds-and-raisins-every-morning/ar-BB1orJdW?ocid=entnewsntp&pc=U531&cvid=346604cbed5b4ef68ed819a4381917da&ei=39'; // Replace with your URL

  constructor(private waveService: WaveAccessibilityService) {}

  ngOnInit(): void {
    this.checkAccessibilityByUrl();
  }

  checkAccessibilityByUrl() {
    this.waveService.checkAccessibility(this.url).subscribe(
      (data) => {
        this.accessibilityResults = data;
        console.log(this.accessibilityResults);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
