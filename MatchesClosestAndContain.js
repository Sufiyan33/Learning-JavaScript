console.log("Exploring matches, closes and contains")
 //Matches - Element.matches(css) to check if element is matches with the given css selectors.
 //Closes - Element.closet(css) to look the nearest ancestor that matches given CSS selectors. The element itself also checked.
 //Contains - Element.contains(css) return true if element B is inside of element A or when element A == element B.

 let id1 = document.getElementById("id1")
 let sp1 = document.getElementById("sp1")
 console.log(id1)
 console.log(id1.matches(".class"))
 console.log(id1.matches(".box"))
 console.log(sp1.closest(".box"))
 console.log(sp1.closest("#sp1"))
 console.log(id1.contains(".box"))
 console.log(sp1.contains(sp1))
 console.log(sp1.contains(id1))