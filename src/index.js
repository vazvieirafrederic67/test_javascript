import { fetchButterflies } from "./fakeAPI";


let termInput = document.getElementById("termInput");
let resultsLoading = document.getElementById("resultsLoading");
let resultCount = document.getElementById("resultCount");
let results = document.getElementById("results");
let buttonSearch = document.getElementById("buttonSearch");

resultsLoading.style.visibility = "hidden";


buttonSearch.addEventListener("click", function() {
  resultsLoading.style.visibility = "visible";
  fetchButterflies(termInput.value).then((responses) => {
    responses.forEach(element => {
      
      var li = document.createElement("li");
      var p = document.createElement("p");
      p.innerText = "Name : " + element.scientificName + " | Family : " + element.family + " | Country : " + element.country + " | Origin : " + element.continent;

      li.appendChild(p);
      results.appendChild(li);
      resultsLoading.style.visibility = "hidden";
      resultCount.innerText = responses.length;
    });
  })
})


/**
 * Coding challenge: Medium difficulity, database search:
 *
 * This challenge will test:
 * - Adding/removing event listeners on the dom
 * - Property choosing and handling events.
 * - Updating the dom.
 * - Understanding and preventing race conditions.
 * - Async code.
 *
 * Introduction:
 * - Each step is depended on the previous working correctly.
 * - Files contained in ./fakeAPI should remain unchanged. The current file is the only file that needs to be modified.
 * - The imported function fetchButterflies(term: string) is an async function
 *   returning an array of butterflies matching the provided term.
 *
 * Steps:
 * A. When typing a name inside the input element, call the fetch function to get
 *    an array of butterflies matching the new term. Update the list with the returned values,
 *    including the bf's scientific name, family and country of origin.
 * B. Conditionally hide/show the loader element while loading.
 * C. When results are returned, update the count element to contain the array length.
 * D. You might have noticed that the fetch function returns results after a random interval.
 *    This can cause a race condition. Write code to fix this and only render the last request
 *    to the screen.
 * E. The navigation should allow you to navigate between the two pages "searchPage" and "aboutPage".
 *    When leaving the searchPage, all events should be removed, and only reapplied once navigating back to the search.
 */
