
// All code in this script is Copyright(C) 2003, Ali AKYILDIRIM, aliakyildirim@myself.com
// For documentation and more info, see:  http://neunkirchen.kolayweb.com
// This is SNARK Version 1.0, 03 feb 2003
 
var MAX_ENGINES = 30;
var SNARK_STRING = "hunting+the+snark";
 
function MakeArray(n) {
   for (var i = 1; i <= n; i++) {
     this[i] = 0;
   }
   this.maxlen = n;
   this.len = 0;
   return this;
}
 
var engs = new MakeArray(MAX_ENGINES);
 
function find_substring(needle, haystack) {
   var i, needlen = needle.length, haylen = haystack.length;
   for (i=0; i<=haylen-needlen; i++) {
      if (needle == haystack.substring(i,i+needlen))
        return i;
   }
   return false;
}
 
function Engine(name, opts, home, search) {
  var snark = find_substring(SNARK_STRING, search);
  this.name = name;
  this.opts = opts;
  this.home = home;
  this.pre_snark = search.substring(0,snark);
  this.post_snark= search.substring(snark+SNARK_STRING.length, search.length);
}
 
function Add(name, opts, home, search) {
  engs.len++;
  if (engs.len <= engs.maxlen) {
    engs[engs.len] = new Engine(name, opts, home, search)
  }
  else {
    alert("Better increase MAX_ENGINES: " + engs.len + ">" + engs.maxlen)
  }
}
 
// ADD YOUR OWN SEARCH ENGINES BELOW.  (See http://www.cs.cmu.edu/~jab/snark/ )
 
 

Add("Yahoo!", "",
   "http://www.yahoo.com/",
   "http://search.yahoo.com/bin/search?p=hunting+the+snark" );
 
Add("Weather (City, ST)", "",
   "http://www.nnic.noaa.gov/cgi-bin/page?pg=netcast",
   "http://www.nnic.noaa.gov/cgi-bin/netcast.do-it?state=hunting+the+snark&area=Local+Forecast&html=yes&match=strong");
 
 
// ADD YOUR OWN SEARCH ENGINES ABOVE.  (See http://www.cs.cmu.edu/~jab/snark/ )
 
function HandleForm(form) {
  form.submit();  // This fixes a mysterious Netscape bug.  Without this line,
                  // you can't use <enter> to start the search the first time.
  var i, oldq=form.query.value, newq="";
  for (i=0; i<oldq.length; i++) {  // compress [ ]+ into \+
    var thischar = oldq.charAt(i);
    if (thischar != ' ')
      newq += thischar;
    else if (lastchar != ' ')
      newq += '+';
    lastchar = thischar;
  }
  var eng = engs[1+form.service.selectedIndex];
  location.href = newq ? eng.pre_snark + newq + eng.post_snark : eng.home;
}
 
function DisplayForm() {
  document.writeln('<CENTER><FORM OnSubmit="HandleForm(this); return false">');
  document.writeln('Search <SELECT name="service">');
  for (i=1; i <= engs.len; i++) {
    document.writeln("<OPTION " + engs[i].opts + "> " + engs[i].name);
  }
  document.writeln('</SELECT> for <INPUT size=26 name="query">');
  document.writeln('<input type=submit value=" GO!">');
  document.writeln('</FORM> </CENTER>');
}
 
DisplayForm();
 
// done hiding from old browsers -->