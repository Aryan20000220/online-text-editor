
 function italic()   {
    document.execCommand('italic', true , null) 
 } 

 
 document.querySelectorAll ('#editor').forEach(function (element) {
    element.addEventListener('input', function() {
        currentStep++
        if (currentStep < contentHistory.length){
            contentHistory = contentHistory.slice(0, currentStep)
        }

        contentHistory.push(document.getElementById('editor').innerHTML)
    })
 })