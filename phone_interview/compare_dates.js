'use strict';
// This function compares two dates
class checkDates
{
  constructor()
  {
    this.sortedDates = [];
  }

  // This function compares 2 dates and return the erarlier
  compareDates(date1,date2)
  {
    let formatDate1 = [];
    let formatDate2 = [];
    let dates = [];
    let dateObj1 = {};
    let dateObj2 = {};

    formatDate1 = date1.split("/");
    formatDate2 = date2.split("/");


    formatDate1[1] = this.formatDateParam(formatDate1[1]) ;
    formatDate1[2] = this.formatDateParam(formatDate1[2]) ;
    formatDate2[1] = this.formatDateParam(formatDate2[1]) ;
    formatDate2[2] = this.formatDateParam(formatDate2[2]) ;


    // Build the date string and sort dates
    dateObj1 = {"date":date1,"dateStr":formatDate1[0] + formatDate1[1] + formatDate1[2]};
    dateObj2 = {"date":date2,"dateStr":formatDate2[0] + formatDate2[1] + formatDate2[2]};

    dates.push(dateObj1);
    dates.push(dateObj2);

    dates.sort(function(a,b){
      return a.dateStr.localeCompare(b.dateStr);
    });

    this.sortedDates.push(dates[0].date);
    this.sortedDates.push(dates[1].date);


    return this.sortedDates;

  }

  // Function formatting month if needed
  formatDateParam(parameter)
  {
    if(parameter.length < 2)
      parameter = "0" + parameter ;

    return parameter;
  }


}

// Build the main functiuon
function main()
{
  // Format Year/Month/Day
  var date1 = "2018/12/5";
  var date2 = "2019/7/11";

  var dates = new checkDates();
  console.log(dates.compareDates(date1,date2));

  // time complexity
  // Array insertrion O(n)

  // Space complexity
  // O(n)
}

// MAIN------------------------------------------------------------------

main();
