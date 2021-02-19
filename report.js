class Report {
  constructor() {
    this.green = 0;
    this.amber = 0;
    this.red = 0;
  }

  sort(grade) {
    const scores = grade.split(", ");
    console.log(scores);
    scores.forEach((element) => {
      if (element == "Green") {
        this.green += 1;
      } else if (element == "Amber") {
        this.amber += 1;
      } else if (element == "Red") {
        this.red += 1;
      }
    });
  }

  review() {
    return (
      "Green: " +
      this.green +
      "\n" +
      "Amber: " +
      this.amber +
      "\n" +
      "Red: " +
      this.red
    );
  }
}

module.exports = Report;
