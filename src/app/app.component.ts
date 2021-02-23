import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  x = 0;
  y = 0;
  nama = "Game Start";
  turn = "Player 1 Turn";
  ends: boolean = false;
  counter = 0;
  item: String[][] = [
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"]
  ];

  Jalan(event: MouseEvent) {
    if (this.counter == 0) {
      this.item[this.x][this.y] = "0";
      this.turn = "Player 2 Turn";
      this.counter = 1;
    } else {
      this.turn = "Player 1 Turn";
      this.item[this.x][this.y] = "1";
      this.counter = 0;
    }
    this.check();
    if (this.ends) {
      (event.target as HTMLButtonElement).disabled = true;
      this.nama = "Game Ends!!! Congratulations Player " + this.counter;
      this.turn = "";
    }
  }
  countermenang = 0;

  check() {
    var current = "";
    if (this.counter == 0) {
      current = "1";
    } else {
      current = "0";
    }
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        if (this.item[i][j] != "*") {
          if (j < 2) {
            for (var a = j; a < 5; a++) {
              if (this.item[i][a] == current) {
                this.countermenang++;
                console.log(this.item[i][a]);
                if (this.countermenang == 4) {
                  this.ends = true;
                  break;
                }
              } else {
                this.countermenang = 0;
              }
            }
          }
          if (this.countermenang == 4) {
            alert("you win player " + this.counter);

            this.ends = true;
            break;
          }
          if (i < 2) {
            for (var a = i; a < 5; a++) {
              if (this.item[a][j] == current) {
                this.countermenang++;
                if (this.countermenang == 4) {
                  this.ends = true;
                  break;
                }
              } else {
                this.countermenang = 0;
              }
            }
          }
          if (this.countermenang == 4) {
            alert("you win player " + this.counter);

            this.ends = true;
            break;
          }
        }
      }
    }
  }
}
