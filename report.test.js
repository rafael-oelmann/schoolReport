const Report = require("./report");

describe("Report", () => {
  test("takes a grade, stores value, returns report", () => {
    const report = new Report();
    report.sort("Green");
    expect(report.review()).toBe("Green: 1\nAmber: 0\nRed: 0");
  });

  test("takes a 2 of same grade, stores value, returns report", () => {
    const report = new Report();
    report.sort("Green, Green");
    expect(report.review()).toBe("Green: 2\nAmber: 0\nRed: 0");
  });

  test("takes multi grades, stores value, returns report", () => {
    const report = new Report();
    report.sort("Green, Green, Red, Amber, Red");
    expect(report.review()).toBe("Green: 2\nAmber: 1\nRed: 2");
  });
});
