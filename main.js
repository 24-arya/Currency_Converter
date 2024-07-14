console.log("Main.js working")

const populate = async (base, value) => {
    let myStr = ""
    const url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_AJ2l1YgCVwXX87GcWJaDfYcwrlwWd6Dbcwqr00nH";
    let response = await fetch(url);
    let rJson = await response.json();
    document.querySelector(".output").style.display = "block";

    // Iterate over each currency key in the 'data' object
    for (let key of Object.keys(rJson["data"])) {
        const currency = rJson["data"][key];
        myStr += `<tr>
                      <td>${key}</td>
                      <td>${currency["code"]}</td>
                      <td>${Math.round(currency["value"] * value)}</td>
                   </tr>`;
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
}

const btn = document.querySelector(".submit");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const value = parseInt(document.querySelector("input[name='quantity']").value, 10);
    const currency = document.querySelector("select[name='currency']").value;
    populate(currency, value);
});




