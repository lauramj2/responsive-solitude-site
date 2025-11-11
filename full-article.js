document.getElementById("mySelect").addEventListener("change", function(){
    const selectedValue = this.value
    if (selectedValue) {
        window.location.href = selectedValue;
    }
})