
function superbowlWin(array){
    const wonYear = array.find(search => search.result === "W");
    if (wonYear) {
        return wonYear.year
    }

}

