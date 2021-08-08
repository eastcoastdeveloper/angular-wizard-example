import { Component, ElementRef, ViewChild, Injectable } from '@angular/core';

function _window(): any {
  return window;
}

@Injectable()
export class WindowRef {
  get nativeWindow(): any {
    return _window();
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class AppComponent {
  @ViewChild('progressMobile', { static: false }) progressMobile: ElementRef;
  @ViewChild('status', { static: false }) status: ElementRef;

  windowSize: any;
  isMobile: boolean = false;
  width: number = window.innerWidth;
  height: number = window.innerWidth;
  mobileWidth: number = 675;

  navDots: any;
  activeSection: number = 0;
  parts: any = [
    {
      name: 'Part 1',
      content:
        "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples."
    },
    {
      name: 'Part 2',
      content:
        'At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
    },
    {
      name: 'Part 3',
      content:
        'Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisitiendum. Because he will ab hold, unless but through concer, and also of those who resist. Now a pure snore disturbeded sum dust. He ejjnoyes, in order that somewon, also with a severe one, unless of life. May a cusstums offficer somewon nothing of a poison-filled.'
    },
    {
      name: 'Part 4',
      content:
        "In computer programming, a placeholder is a character, word, or string of characters that temporarily takes the place of the final data. For example, a programmer may know that she needs a certain number of values or variables, but doesn't yet know what to input. She can use a placeholder as a temporary solution until a proper value or variable can be assigned."
    },
    {
      name: 'Part 5',
      content:
        "Alternatively referred to as dummy text or filler text, placeholder text is text that temporarily 'holds a place' in a document for the purpose of typesetting and layout. It may be used to preview fonts, spoof an e-mail spam filter, or reserve a specific place on a web page or other document for images, text, or some other object."
    }
  ];

  ngOnInit() {
    this.navDots = Array.from(document.querySelectorAll('[data-num]'));
    this.isMobile = this.width < this.mobileWidth;
  }

  navigate(i: number) {
    this.activeSection = i;
    switch (this.activeSection) {
      case (this.activeSection = 0):
        this.isMobile
          ? (this.progressMobile.nativeElement.style.height = '0')
          : (this.status.nativeElement.style.width = '20%');
        break;
      case (this.activeSection = 1):
        this.isMobile
          ? (this.progressMobile.nativeElement.style.height = '60px')
          : (this.status.nativeElement.style.width = '40%');
        break;
      case (this.activeSection = 2):
        this.isMobile
          ? (this.progressMobile.nativeElement.style.height = '110px')
          : (this.status.nativeElement.style.width = '60%');
        break;
      case (this.activeSection = 3):
        this.isMobile
          ? (this.progressMobile.nativeElement.style.height = '155px')
          : (this.status.nativeElement.style.width = '80%');
        break;
      case (this.activeSection = 4):
        this.isMobile
          ? (this.progressMobile.nativeElement.style.height = '210px')
          : (this.status.nativeElement.style.width = '100%');
        break;
    }
  }

  onWindowResize(event: any) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
    this.activeSection = 0;
    this.navigate(0);
  }

  next() {
    if (this.activeSection >= this.parts.length - 1) {
      this.activeSection = 0;
      this.navigate(0);
    } else {
      this.activeSection++;
      this.navigate(this.activeSection);
    }
  }

  previous() {
    if (this.activeSection > 0) {
      this.activeSection--;
      this.navigate(this.activeSection);
    }
  }
}
