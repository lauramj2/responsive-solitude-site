const date = document.getElementById("date")
const dateSnapshot = new Date() 
const day = dateSnapshot.getDate().toString()
const year = dateSnapshot.getFullYear().toString()

const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const month = dateSnapshot.getMonth()
const monthIndex = monthArr.at(month)


document.getElementById("date").innerText = monthIndex + " " + day + "," + " " +  " " + year
document.getElementById("copyright").append(year)

document.getElementById("mySelect").addEventListener("change", function(){
    const selectedValue = this.value
    if (selectedValue) {
        window.location.href = selectedValue;
    }
})