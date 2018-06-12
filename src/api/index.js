var API_URL = "https://www.checkbooknyc.com/api"

export function getData(){
  // return fetch(API_URL , {
  //   method: 'POST',
  // })
  // .then(res => { debugger } )
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       debugger
    }
};
  xhttp.open("POST", API_URL, true);
  xhttp.send("<request><type_of_data>Budget</type_of_data></request>")
}
