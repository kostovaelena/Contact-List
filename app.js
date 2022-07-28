function searchFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("contactsList");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

document.getElementById("contactsList").addEventListener("click", function (e) {
  if (
    e.target &&
    (e.target.nodeName == "LI" ||
      e.target.nodeName == "IMG" ||
      e.target.nodeName == "A" ||
      e.target.nodeName == "B")
  ) {
    var id = e.target.id;

    document.getElementById("rightSide").style.visibility = "visible";

    switch (id) {
      case "0":
        {
          document.getElementById("name").innerHTML = "Mark Appleyard";
          document.getElementById("right").src = "./images/mark.JPG";
          document.getElementById("labelSex").innerHTML = "Male";
          document.getElementById("labelAge").innerHTML = "30";
          document.getElementById("labelBirthday").innerHTML =
            "November 11, 1982";
          document.getElementById("labelAddress").innerHTML =
            "123 Fake St. Hungtington Beach, CA 92122";
          document.getElementById("labelHome").innerHTML = "123-456-7890";
          document.getElementById("labelPrimaryEmail").innerHTML =
            "mappleyard@gmail.com";
          document.getElementById("labelCell").innerHTML = "123-456-7890";
          document.getElementById("labelSecondaryEmail").innerHTML =
            "mappleyard@gmail.com";
          document.getElementById("billImage").src = "./images/5.jpg";
          document.getElementById("labelBillingContact").innerHTML =
            "Eric Koston";
          document.getElementById("labelNotes").innerHTML =
            "Appleyard's first major skateboard deck sponsor was Habitat, distributed by the DNA company that is also responsible for distributing Alien Workshop. While sponsored by this company that he filmed his inaugural video for a major skateboard brand.";
        }
        break;
      case "1":
        {
          document.getElementById("name").innerHTML = "Chris Cole";
          document.getElementById("right").src = "./images/chris.jpg";
          document.getElementById("labelSex").innerHTML = "Male";
          document.getElementById("labelAge").innerHTML = "20";
          document.getElementById("labelBirthday").innerHTML =
            "December 19, 2002";
          document.getElementById("labelAddress").innerHTML =
            "1234 St. Vodnjanska 52031";
          document.getElementById("labelHome").innerHTML = "520-456-2360";
          document.getElementById("labelCell").innerHTML = "785-456-6502";
          document.getElementById("labelPrimaryEmail").innerHTML =
            "chris@gmail.com";
          document.getElementById("labelSecondaryEmail").innerHTML =
            "chris.cole@gmail.com";
          document.getElementById("labelNotes").innerHTML =
            "Appleyard's first major skateboard deck sponsor was Habitat, distributed by the DNA company that is also responsible for distributing Alien Workshop. While sponsored by this company that he filmed his inaugural video for a major skateboard brand.";
          document.getElementById("billImage").src = "./images/6.jfif";
          document.getElementById("labelBillingContact").innerHTML =
            "Maria Mosby";
        }
        break;
      case "2":
        {
          document.getElementById("name").innerHTML = "Austin Gillette";
          document.getElementById("right").src = "./images/3.jpg";
          document.getElementById("labelSex").innerHTML = "Male";
          document.getElementById("labelAge").innerHTML = "23";
          document.getElementById("labelBirthday").innerHTML = "July 24, 1999";
          document.getElementById("labelAddress").innerHTML =
            "12 St. Partizanska 52301";
          document.getElementById("labelHome").innerHTML = "582-745-2360";
          document.getElementById("labelCell").innerHTML = "786-123-4520";
          document.getElementById("labelPrimaryEmail").innerHTML =
            "austin@gmail.com";
          document.getElementById("labelSecondaryEmail").innerHTML =
            "austin99@yahoo.com";
          document.getElementById("labelNotes").innerHTML =
            "Appleyard's first major skateboard deck sponsor was Habitat, distributed by the DNA company that is also responsible for distributing Alien Workshop. While sponsored by this company that he filmed his inaugural video for a major skateboard brand.";
          document.getElementById("billImage").src = "./images/mark.JPG";
          document.getElementById("labelBillingContact").innerHTML =
            "Mark Appleyard";
        }
        break;
      case "3":
        {
          document.getElementById("name").innerHTML = "David Gonzales";
          document.getElementById("right").src = "./images/4.jpg";
          document.getElementById("labelSex").innerHTML = "Male";
          document.getElementById("labelAge").innerHTML = "29";
          document.getElementById("labelBirthday").innerHTML = "June 17, 1993";
          document.getElementById("labelAddress").innerHTML =
            "1234 St. Bansko 52031";
          document.getElementById("labelHome").innerHTML = "520-456-2360";
          document.getElementById("labelCell").innerHTML = "785-456-6502";
          document.getElementById("labelPrimaryEmail").innerHTML =
            "gonzales.d@gmail.com";
          document.getElementById("labelSecondaryEmail").innerHTML =
            "gonzales.d@gmail.com";
          document.getElementById("labelNotes").innerHTML =
            "Appleyard's first major skateboard deck sponsor was Habitat, distributed by the DNA company that is also responsible for distributing Alien Workshop. While sponsored by this company that he filmed his inaugural video for a major skateboard brand.";
          document.getElementById("billImage").src = "./images/5.jpg";
          document.getElementById("labelBillingContact").innerHTML =
            "Eric Koston";
        }
        break;
      case "4":
        {
          document.getElementById("name").innerHTML = "Maria Mosby";
          document.getElementById("right").src = "./images/6.jfif";
          document.getElementById("labelSex").innerHTML = "Female";
          document.getElementById("labelAge").innerHTML = "45";
          document.getElementById("labelBirthday").innerHTML =
            "December 19, 1977";
          document.getElementById("labelAddress").innerHTML =
            "1234 St. Milan Mijalkovich 230";
          document.getElementById("labelHome").innerHTML = "520-456-2360";
          document.getElementById("labelCell").innerHTML = "785-456-6502";
          document.getElementById("labelPrimaryEmail").innerHTML =
            "maria@hotmail.com";
          document.getElementById("labelSecondaryEmail").innerHTML =
            "maria@hotmail.com";
          document.getElementById("labelNotes").innerHTML =
            "Appleyard's first major skateboard deck sponsor was Habitat, distributed by the DNA company that is also responsible for distributing Alien Workshop. While sponsored by this company that he filmed his inaugural video for a major skateboard brand.";
          document.getElementById("billImage").src = "./images/3.jpg";
          document.getElementById("labelBillingContact").innerHTML =
            "Austin Gillette";
        }
        break;
      case "5":
        {
          document.getElementById("name").innerHTML = "Eric Koston";
          document.getElementById("right").src = "./images/5.jpg";
          document.getElementById("labelSex").innerHTML = "Male";
          document.getElementById("labelAge").innerHTML = "18";
          document.getElementById("labelBirthday").innerHTML = "May 02, 2004";
          document.getElementById("labelAddress").innerHTML =
            "012 St. Zelengora 230";
          document.getElementById("labelHome").innerHTML = "520-456-2360";
          document.getElementById("labelCell").innerHTML = "785-456-6502";
          document.getElementById("labelPrimaryEmail").innerHTML =
            "eric@hotmail.com";
          document.getElementById("labelSecondaryEmail").innerHTML =
            "eric.koston@hotmail.com";
          document.getElementById("labelNotes").innerHTML =
            "Appleyard's first major skateboard deck sponsor was Habitat, distributed by the DNA company that is also responsible for distributing Alien Workshop. While sponsored by this company that he filmed his inaugural video for a major skateboard brand.";
          document.getElementById("billImage").src = "./images/6.jfif";
          document.getElementById("labelBillingContact").innerHTML =
            "Maria Mosby";
        }
        break;
      case "6":
        {
          document.getElementById("name").innerHTML = "Robin Oldrin";
          document.getElementById("right").src = "./images/7.jpg";
          document.getElementById("labelSex").innerHTML = "Female";
          document.getElementById("labelAge").innerHTML = "28";
          document.getElementById("labelBirthday").innerHTML =
            "August 19, 1993";
          document.getElementById("labelAddress").innerHTML =
            "1234 St. Viktor Ivanovich 896";
          document.getElementById("labelHome").innerHTML = "520-456-2360";
          document.getElementById("labelCell").innerHTML = "785-456-6502";
          document.getElementById("labelPrimaryEmail").innerHTML =
            "robin@hotmail.com";
          document.getElementById("labelSecondaryEmail").innerHTML =
            "oldrin@yahoo.com";
          document.getElementById("labelNotes").innerHTML =
            "Appleyard's first major skateboard deck sponsor was Habitat, distributed by the DNA company that is also responsible for distributing Alien Workshop. While sponsored by this company that he filmed his inaugural video for a major skateboard brand.";
          document.getElementById("billImage").src = "./images/4.jpg";
          document.getElementById("labelBillingContact").innerHTML =
            "David Gonzales";
        }
        break;
    }
  }
});
