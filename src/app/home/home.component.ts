import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slideIndex = 0;
  testimonialSlideIndex = 0;
  
  showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    (slides[i] as HTMLElement).style.display = "none";
  }
  this.slideIndex = this.slideIndex + 1;
  if (this.slideIndex > slides.length) {this.slideIndex = 1}
  (slides[this.slideIndex-1] as HTMLElement).style.display = "block";
  setTimeout(()=>this.showSlides(), 2000);
}

showTestimonialSlides() {
  let i;
  let slides = document.getElementsByClassName("testimonialSlides");
  for (i = 0; i < slides.length; i++) {
    (slides[i] as HTMLElement).style.display = "none";
  }
  this.testimonialSlideIndex = this.testimonialSlideIndex + 1;
  if (this.testimonialSlideIndex > slides.length) {this.testimonialSlideIndex = 1}
  (slides[this.testimonialSlideIndex-1] as HTMLElement).style.display = "block";
  setTimeout(()=>this.showTestimonialSlides(), 2000); 
}

  constructor() { }

  ngOnInit(): void {
    this.showSlides();
    this.showTestimonialSlides()
  }

}
